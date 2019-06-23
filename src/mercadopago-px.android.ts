import { Common } from "./mercadopago-px.common";
import * as app from "tns-core-modules/application";

declare const com: any;

export class MercadopagoPx extends Common {
    public start(publicKey: string, preferenceId: string) {
        let activity =
            app.android.startActivity || app.android.foregroundActivity;
        let checkout = new com.mercadopago.android.px.core.MercadoPagoCheckout.Builder().build(
            publicKey,
            preferenceId
        );
        checkout.startPayment(activity, 1);
    }
}
