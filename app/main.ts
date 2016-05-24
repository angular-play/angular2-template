
import "reflect-metadata";
import "es6-shim";

import { AppComponent } from "./app.component";
import {ROUTER_PROVIDERS } from "angular2/router";
import {APP_BASE_HREF} from 'angular2/platform/common';
import { provide} from "angular2/core";

import { bootstrap } from "angular2/platform/browser";

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue : '/' })]);


