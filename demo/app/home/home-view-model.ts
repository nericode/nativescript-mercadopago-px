import { Observable } from "tns-core-modules/data/observable";
import { MercadopagoPx } from "nativescript-mercadopago-px";

export class HomeViewModel extends Observable {
    private mercadopagoPx: MercadopagoPx = new MercadopagoPx();

    constructor() {
        super();
    }

    public onClick() {
        this.mercadopagoPx
            .start({
                language: "es",
                publicKey: "TEST-8ce06797-4500-488b-a302-2ac8886f946d",
                preferenceId: "302524805-5b493807-8906-40da-ac16-8159e6015ad6"
            })
            .then(result => {
                console.dir(result);
            })
            .catch(error => {
                console.log("####### ERROR ########");
                console.dir(error);
                console.log("####### END ERROR ########");
            });
    }
}
