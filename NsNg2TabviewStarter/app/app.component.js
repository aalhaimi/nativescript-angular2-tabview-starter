"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_deprecated_1 = require("@angular/router-deprecated");
var tabs_component_1 = require("./components/tabs/tabs.component");
var page1_component_1 = require("./components/page1/page1.component");
var page2_component_1 = require("./components/page2/page2.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            providers: [router_1.NS_ROUTER_PROVIDERS],
            template: "<page-router-outlet></page-router-outlet>",
        }),
        router_deprecated_1.RouteConfig([
            { path: '/tabs', component: tabs_component_1.TabsComponent, name: 'Tabs', useAsDefault: true },
            { path: '/page1', component: page1_component_1.Page1Component, name: 'Page1' },
            { path: '/page2', component: page2_component_1.Page2Component, name: 'Page2' }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map