"use strict";
var core_1 = require("@angular/core");
var ns_router_deprecated_1 = require("nativescript-angular/router-deprecated/ns-router-deprecated");
var router_deprecated_1 = require("@angular/router-deprecated");
var tabs_component_1 = require("./components/tabs/tabs.component");
var page1_component_1 = require("./components/page1/page1.component");
var page2_component_1 = require("./components/page2/page2.component");
var frame_1 = require("ui/frame");
var platform_1 = require("platform");
var AppComponent = (function () {
    function AppComponent() {
        // Applying white color styling to UI Navigation Status Bar
        if (platform_1.isIOS) {
            var navigationBar = frame_1.topmost().ios.controller.navigationBar;
            navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
        }
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            directives: [ns_router_deprecated_1.NS_ROUTER_DIRECTIVES],
            providers: [ns_router_deprecated_1.NS_ROUTER_PROVIDERS],
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