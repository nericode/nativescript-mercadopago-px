import { Common } from "./mercadopago-px.common";
import * as app from "tns-core-modules/application";

export class MercadopagoPx extends Common {
    public setup(publicKey: string, preferenceId: string) {
        let checkout = MercadoPagoCheckout.alloc().initWithBuilder(
            MercadoPagoCheckoutBuilder.alloc()
                .initWithPublicKeyPreferenceId(publicKey, preferenceId)
                .setLanguage("es")
        );

        checkout.startWithNavigationControllerLifeCycleProtocol(
            app.ios.rootController,
            null
        );
    }
}
