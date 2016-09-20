///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {ROUTER_PROVIDERS} from 'angular2/router'; // the ROUTER_PROVIDERS is constant array include the
                                                    // reference to all the router classes required for 
                                                        // dependency injection

bootstrap(AppComponent, [ROUTER_PROVIDERS]);