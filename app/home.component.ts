
import { Component } from "angular2/core";
import { MDL } from "./mdl";

@Component({
    selector: "app",
    templateUrl: "/app/home.component.html",
    directives: [MDL]
})
export class HomeComponent {

}