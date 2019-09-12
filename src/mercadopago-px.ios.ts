import { Options } from "./mercadopago-px.common";
import * as frameModule from "tns-core-modules/ui/frame";

let extraParamsResult = null;

export class LifeCycleProtocolImpl extends NSObject
    implements PXLifeCycleProtocol {
    public resolve: any;
    public reject: any;
    static ObjCProtocols = [PXLifeCycleProtocol]; // define our native protocalls

    static new(): LifeCycleProtocolImpl {
        return <LifeCycleProtocolImpl>super.new(); // calls new() on the NSObject
    }

    cancelCheckout(): () => void {
        this.reject({
            status: "cancelCheckout",
            data: null,
            error: "cancel"
        });
        return null;
    }
    changePaymentMethodTapped?(): () => void {
        return null;
    }
    finishCheckout(): (result: PXResult) => void {
        if (extraParamsResult["payment_status"] == "rejected") {
            this.reject({
                status: "finishCheckout",
                data: null,
                error: null
            });
        } else if (extraParamsResult["payment_status"] == "approved") {
            this.resolve({
                status: "finishCheckout",
                data: {
                    id: extraParamsResult["session_id"],
                    status: extraParamsResult["payment_status"],
                    paymentMethodId: extraParamsResult["payment_method_id"],
                    paymentTypeId: extraParamsResult["payment_id"],
                    card: extraParamsResult["card_id"],
                    issuerId: extraParamsResult["issuer_id"],
                    installments: extraParamsResult["extra_info"]
                },
                error: null
            });
        }

        return null;
    }
}

export class TrackProtocolImpl extends NSObject implements PXTrackerListener {
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

        extraParamsResult = extraParamsJson;
    }
}

export class MercadopagoPx {
    public checkout(options: Options): Promise<any> {
        return new Promise((resolve, reject) => {
            // Traacker Lister
            let trackProtocolDelegate: TrackProtocolImpl = TrackProtocolImpl.new();
            let trackCycleProtocol: PXTrackerListener = trackProtocolDelegate;

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
