"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
 % -licenseHeader %  >
;
var core_1 = require("@angular/core");
var ng2_alfresco_core_1 = require("ng2-alfresco-core");
projectNameCamelCase %  > Component;
from;
'./src/<%= projectName %>.component';
__export(require("./src/<%= projectName %>.component"));
var default_1 = (function () {
    function default_1() {
    }
    return default_1;
}());
default_1 = __decorate([
    core_1.NgModule({
        imports: [
            ng2_alfresco_core_1.CoreModule
        ],
        declarations: [
            , projectNameCamelCase %  > Component
        ],
        providers: [],
        exports: [
            , projectNameCamelCase %  > Component
        ]
    })
], default_1);
 %  > Module;
{ }
