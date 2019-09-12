import { Options } from "./mercadopago-px.common";
import * as frameModule from "tns-core-modules/ui/frame";

export class LifeCycleProtocolImpl extends NSObject
    implements PXLifeCycleProtocol {
    public resolve: any;
    public reject: any;
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
        this.resolve({
            status: "closeCheckout",
            data: null,
            error: null
        });

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
        var jsonData = NSJSONSerialization.dataWithJSONObjectOptionsError(
            extraParams,
            0
        );

        var extraParamsJson = JSON.parse(
            NSString.alloc()
                .initWithDataEncoding(jsonData, 4)
                .toString()
        );

        if (extraParamsJson["payment_status"] == "approved") {
            this.resolve({
                status: "successCheckout",
                data: {
                    id: extraParamsJson["session_id"],
                    status: extraParamsJson["payment_status"],
                    paymentMethodId: extraParamsJson["payment_method_id"],
                    paymentTypeId: extraParamsJson["payment_id"],
                    card: extraParamsJson["card_id"],
                    issuerId: extraParamsJson["issuer_id"],
                    installments: null
                },
                error: null
            });
        } else if (extraParamsJson["payment_status"] == "rejected") {
            this.reject({
                status: "error",
                data: extraParamsJson,
                error: null
            });
        }
    }
}

export class MercadopagoPx {
    public listener(): Promise<any> {
        return new Promise((resolve, reject) => {
            // Traacker Lister
            let trackProtocolDelegate: TrackProtocolImpl = TrackProtocolImpl.new();
            let trackCycleProtocol: PXTrackerListener = trackProtocolDelegate;
            trackProtocolDelegate.resolve = resolve;
            trackProtocolDelegate.reject = reject;

            PXTracker.setListener(trackCycleProtocol);
        });
    }

    public checkout(options: Options): Promise<any> {
        return new Promise((resolve, reject) => {
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
            lifeCycleProtocolDelegate.resolve = resolve;
            lifeCycleProtocolDelegate.reject = reject;

            // Start checkout
            checkout.startWithNavigationControllerLifeCycleProtocol(
                frameModule.topmost().ios.controller,
                pxLifeCycleProtocol
            );
        });
    }
}
