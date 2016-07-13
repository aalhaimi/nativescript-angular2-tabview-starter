"use strict";
var core_1 = require('@angular/core');
var page1_component_1 = require('../page1/page1.component');
var page2_component_1 = require('../page2/page2.component');
var TabsComponent = (function () {
    function TabsComponent() {
        this.tabIndex = 0;
    }
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'tabs',
            directives: [page1_component_1.Page1Component, page2_component_1.Page2Component],
            templateUrl: './components/tabs/tabs.html',
        }), 
        __metadata('design:paramtypes', [])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=tabs.component.js.map