import { Options } from "./mercadopago-px.common";
import * as app from "tns-core-modules/application";

declare const com: any;

export class MercadopagoPx {
    private REQUEST_CODE = 1;

    public checkout(options: Options): Promise<any> {
        return new Promise((resolve, reject) => {
            let activity =
                app.android.startActivity || app.android.foregroundActivity;

            let checkout = new com.mercadopago.android.px.core.MercadoPagoCheckout.Builder(
                options.publicKey,
                options.preferenceId
            ).build();

            checkout.startPayment(activity, this.REQUEST_CODE);

            try {
                activity.onActivityResult = (
                    requestCode,
                    resultCode,
                    data: any
                ) => {
                    if (requestCode === this.REQUEST_CODE) {
                        if (
                            resultCode ===
                            com.mercadopago.android.px.core.MercadoPagoCheckout
                                .PAYMENT_RESULT_CODE
                        ) {
                            let payment = data.getSerializableExtra(
                                com.mercadopago.android.px.core
                                    .MercadoPagoCheckout.EXTRA_PAYMENT_RESULT
                            );

                            resolve({
                                status: "finishCheckout",
                                data: {
                                    id: payment.getId(),
                                    status: payment.getPaymentStatus(),
                                    paymentMethodId: payment.getPaymentMethodId(),
                                    paymentTypeId: payment.getPaymentTypeId(),
                                    card: payment.getCard(),
                                    issuerId: payment.getIssuerId(),
                                    installments: payment.getInstallments()
                                },
                                error: null
                            });
                        } else if (resultCode === 0) {
                            if (
                                data != null &&
                                data.getExtras() != null &&
                                data
                                    .getExtras()
                                    .containsKey(
                                        com.mercadopago.android.px.core
                                            .MercadoPagoCheckout.EXTRA_ERROR
                                    )
                            ) {
                                let mercadoPagoError = data.getSerializableExtra(
                                    com.mercadopago.android.px.core
                                        .MercadoPagoCheckout.EXTRA_ERROR
                                );

                                reject({
                                    status: "error",
                                    data: null,
                                    error: mercadoPagoError.getMessage()
                                });
                            } else {
                                reject({
                                    status: "cancel",
                                    data: null,
                                    error: "cancelCheckout"
                                });
                            }
                        }
                    }
                };
            } catch (exception) {
                reject("errorSdkMercadopago");
            }
        });
    }
}
