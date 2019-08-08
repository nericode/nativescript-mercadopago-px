import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { OtherComponentComponent } from "./other-component/other-component.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "other-component", component: OtherComponentComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {}
