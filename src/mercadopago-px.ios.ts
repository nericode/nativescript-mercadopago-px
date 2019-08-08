import { Options } from "./mercadopago-px.common";
import * as app from "tns-core-modules/application";

declare const PXLifeCycleProtocol: any;

export class LifeCycleProtocolImpl extends NSObject
    implements PXLifeCycleProtocol {
    public resolve: any;
    public reject: any;

    static ObjCProtocols = [PXLifeCycleProtocol]; // define our native protocalls

    static new(): LifeCycleProtocolImpl {
        return <LifeCycleProtocolImpl>super.new(); // calls new() on the NSObject
    }

    cancelCheckout(): () => void {
        this.reject("cancelCheckout");
        return null;
    }
    changePaymentMethodTapped?(): () => void {
        return null;
    }
    finishCheckout(): (result: PXResult) => void {
        this.resolve("finishCheckout");
        return null;
    }
}

export class MercadopagoPx {
    public start(options: Options): Promise<any> {
        return new Promise((resolve, reject) => {
            let checkout = MercadoPagoCheckout.alloc().initWithBuilder(
                MercadoPagoCheckoutBuilder.alloc()
                    .initWithPublicKeyPreferenceId(
                        options.publicKey,
                        options.preferenceId
                    )
                    .setLanguage(options.language)
            );

            let lifeCycleProtocolDelegate: LifeCycleProtocolImpl = LifeCycleProtocolImpl.new();
            lifeCycleProtocolDelegate.resolve = resolve;
            lifeCycleProtocolDelegate.reject = reject;

            let pxLifeCycleProtocol: PXLifeCycleProtocol = lifeCycleProtocolDelegate;

            checkout.startWithNavigationControllerLifeCycleProtocol(
                app.ios.rootController,
                pxLifeCycleProtocol
            );
        });
    }
}
