import { Component, OnInit } from "@angular/core";
import { MercadopagoPx } from "nativescript-mercadopago-px";

@Component({
    selector: "ns-other-component",
    templateUrl: "./other-component.component.html"
})
export class OtherComponentComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    onClick(): void {
        let mercadoPago = new MercadopagoPx();

        mercadoPago
            .start({
                language: "es",
                publicKey: "TEST-8ce06797-4500-488b-a302-2ac8886f946d",
                preferenceId: "302524805-5b493807-8906-40da-ac16-8159e6015ad6"
            })
            .then(result => {
                console.dir(result);
            })
            .catch(error => {
                console.dir(error);
            });
    }
}
