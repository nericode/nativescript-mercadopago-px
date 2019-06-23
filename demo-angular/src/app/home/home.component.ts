import { Component, OnInit } from "@angular/core";
import { MercadopagoPx } from "nativescript-mercadopago-px";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    mercadoPago: MercadopagoPx;

    constructor() {
        this.mercadoPago = new MercadopagoPx();
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onClick(): void {
        this.mercadoPago.setup(
            "TEST-4763b824-93d7-4ca2-a7f7-93539c3ee5bd",
            "243966003-0812580b-6082-4104-9bce-1a4c48a5bc44"
        );
    }
}
