import { Options } from "./mercadopago-px.common";

export class LifeCycleProtocolImpl extends NSObject implements PXLifeCycleProtocol {
    public resolve: any;
    public reject: any;

    static ObjCProtocols = [PXLifeCycleProtocol]; // define our native protocalls

    static new(): LifeCycleProtocolImpl {
        return <LifeCycleProtocolImpl>super.new(); // calls new() on the NSObject
    }

    cancelCheckout(): () => void {
        this.reject({
            status: "cancel",
            data: null,
            error: "cancelCheckout"
        });
        return null;
    }
    changePaymentMethodTapped?(): () => void {
        return null;
    }
    finishCheckout(): (result: PXResult) => void {
        this.resolve({
            status: "finishCheckout",
            data: null,
            error: null
        });
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
                options.controller,
                pxLifeCycleProtocol
            );
        });
    }
}
