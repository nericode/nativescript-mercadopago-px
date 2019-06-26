import { Common } from "./mercadopago-px.common";
import * as app from "tns-core-modules/application";

export class LifeCycleProtocolImpl extends NSObject
    implements PXLifeCycleProtocol {
    static ObjCProtocols = [PXLifeCycleProtocol]; // define our native protocalls

    static new(): LifeCycleProtocolImpl {
        return <LifeCycleProtocolImpl>super.new(); // calls new() on the NSObject
    }

    cancelCheckout(): () => void {
        console.info("cancelCheckout");
        return null;
    }
    changePaymentMethodTapped?(): () => void {
        console.info("changePaymentMethodTapped");
        return null;
    }
    finishCheckout(): (result: PXResult) => void {
        console.info("finishCheckout");
        return null;
    }
}

export class MercadopagoPx extends Common {
    public start(publicKey: string, preferenceId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let checkout = MercadoPagoCheckout.alloc().initWithBuilder(
                MercadoPagoCheckoutBuilder.alloc()
                    .initWithPublicKeyPreferenceId(publicKey, preferenceId)
                    .setLanguage("es")
            );

            let lifeCycleProtocolDelegate: LifeCycleProtocolImpl = LifeCycleProtocolImpl.new();
            let pxLifeCycleProtocol: PXLifeCycleProtocol = lifeCycleProtocolDelegate;

            checkout.startWithNavigationControllerLifeCycleProtocol(
                app.ios.rootController,
                pxLifeCycleProtocol
            );
        });
    }
}
