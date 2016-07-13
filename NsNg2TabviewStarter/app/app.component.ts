import {Component} from "@angular/core";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router-deprecated/ns-router-deprecated";
import {RouteConfig} from "@angular/router-deprecated";

import {TabsComponent} from "./components/tabs/tabs.component";
import {Page1Component} from "./components/page1/page1.component";
import {Page2Component} from "./components/page2/page2.component";

import { EventData } from "data/observable";
import { topmost } from "ui/frame";
import { isIOS } from "platform";


@Component({
    selector: "my-app",
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [NS_ROUTER_PROVIDERS],
    template: `<page-router-outlet></page-router-outlet>`,
})

@RouteConfig([
  { path: '/tabs', component: TabsComponent, name: 'Tabs', useAsDefault:true },
  { path: '/page1', component: Page1Component, name: 'Page1' },
  { path: '/page2', component: Page2Component, name: 'Page2' }
])
export class AppComponent {
  constructor() {
    // Applying white color styling to UI Navigation Status Bar
       if (isIOS) {
          let navigationBar = topmost().ios.controller.navigationBar;
          navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
      }
  }
}
