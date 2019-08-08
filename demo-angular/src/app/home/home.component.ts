import { Component, OnInit } from "@angular/core";
import { MercadopagoPx } from "nativescript-mercadopago-px";
import * as frameModule from "tns-core-modules/ui/frame";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    mercadoPago: MercadopagoPx;

    constructor() {}

    ngOnInit(): void {
        // Init your component properties here.
    }

    onClick(): void {
        this.mercadoPago = new MercadopagoPx();

        this.mercadoPago
            .start({
                controller: frameModule.topmost().ios.controller,
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
