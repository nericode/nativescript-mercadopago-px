import { Observable } from "tns-core-modules/data/observable";
import { MercadopagoPx } from "nativescript-mercadopago-px";

export class HomeViewModel extends Observable {
    mercadoPago: MercadopagoPx;
    constructor() {
        super();

        this.mercadoPago = new MercadopagoPx();
        this.mercadoPago
            .start(
                "TEST-4763b824-93d7-4ca2-a7f7-93539c3ee5bd",
                "243966003-0812580b-6082-4104-9bce-1a4c48a5bc44"
            )
            .then(result => {
                console.dir(result);
            })
            .catch(error => {
                console.dir(error);
            });

    }
}
