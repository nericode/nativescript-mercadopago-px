import { Options } from "./mercadopago-px.common";
import * as frameModule from "tns-core-modules/ui/frame";

export class LifeCycleProtocolImpl extends NSObject
    implements PXLifeCycleProtocol {
    static ObjCProtocols = [PXLifeCycleProtocol]; // define our native protocalls

    static new(): LifeCycleProtocolImpl {
        return <LifeCycleProtocolImpl>super.new(); // calls new() on the NSObject
    }

    cancelCheckout(): () => void {
        return null;
    }
    changePaymentMethodTapped?(): () => void {
        return null;
    }
    finishCheckout(): (result: PXResult) => void {
        return null;
    }
}

export class TrackProtocolImpl extends NSObject implements PXTrackerListener {
    public resolve: any;
    public reject: any;

    static ObjCProtocols = [PXTrackerListener]; // define our native protocalls

    static new(): TrackProtocolImpl {
        return <TrackProtocolImpl>super.new(); // calls new() on the NSObject
    }

    trackEventWithScreenNameActionResultExtraParams(
        screenName: string,
        action: string,
        result: string,
        extraParams: NSDictionary<string, any>
    ): void {
        // Not implement this event
    }
    trackScreenWithScreenNameExtraParams(
        screenName: string,
        extraParams: NSDictionary<string, any>
    ): void {
        if (screenName == "/px_checkout/result/success") {
            this.resolve({
                status: "finishCheckout",
                data: { extraParams },
                error: null
            });
        } else if (screenName == "/px_checkout/result/error") {
            this.reject({
                status: "error",
                data: extraParams,
                error: null
            });
        }
    }
}

export class MercadopagoPx {
    public start(options: Options): Promise<any> {
        return new Promise((resolve, reject) => {
            // Traacker Lister
            let trackProtocolDelegate: TrackProtocolImpl = TrackProtocolImpl.new();
            let trackCycleProtocol: PXTrackerListener = trackProtocolDelegate;
            trackProtocolDelegate.resolve = resolve;
            trackProtocolDelegate.reject = reject;

            PXTracker.setListener(trackCycleProtocol);

            // Build checkout
            let checkout = MercadoPagoCheckout.alloc().initWithBuilder(
                MercadoPagoCheckoutBuilder.alloc()
                    .initWithPublicKeyPreferenceId(
                        options.publicKey,
                        options.preferenceId
                    )
                    .setLanguage(options.language)
            );

            // Setup lifeCycle
            let lifeCycleProtocolDelegate: LifeCycleProtocolImpl = LifeCycleProtocolImpl.new();
            let pxLifeCycleProtocol: PXLifeCycleProtocol = lifeCycleProtocolDelegate;

            // Start checkout
            checkout.startWithNavigationControllerLifeCycleProtocol(
                frameModule.topmost().ios.controller,
                pxLifeCycleProtocol
            );
        });
    }
}
