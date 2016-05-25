
import { Component } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES } from "angular2/router";
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";
import { MDL } from "./mdl";

import "/node_modules/material-design-lite/material.min.css!";
import "/css/styles.css!";

@Component({
    selector: "app",
    templateUrl: "/app/app.component.html",
    directives: [ ROUTER_DIRECTIVES, MDL ]
})
@RouteConfig([
    { path: "/home", name: "Home", component: HomeComponent, useAsDefault: true },
    { path: "/about", name: "About", component: AboutComponent }
])
export class AppComponent {}