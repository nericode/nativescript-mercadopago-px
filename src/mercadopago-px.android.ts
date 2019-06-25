import { Common } from "./mercadopago-px.common";
import * as app from "tns-core-modules/application";

declare const com: any;

export class MercadopagoPx extends Common {
    private REQUEST_CODE = 1;

    public start(publicKey: string, preferenceId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let activity =
                app.android.startActivity || app.android.foregroundActivity;
            let checkout = new com.mercadopago.android.px.core.MercadoPagoCheckout.Builder(
                publicKey,
                preferenceId
            ).build();

            checkout.startPayment(activity, this.REQUEST_CODE);

            activity.onActivityResult = (requestCode, resultCode, data) => {
                if (requestCode == this.REQUEST_CODE) {
                    if (
                        resultCode ==
                        com.mercadopago.android.px.core.MercadoPagoCheckout
                            .PAYMENT_RESULT_CODE
                    ) {
                        resolve("finished payment");
                    } else if (resultCode == 0) {
                        reject("canceled payment");
                    }
                }
            };
        });
    }
}
