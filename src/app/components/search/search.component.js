"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../services/index");
var index_2 = require("../../services/index");
var SearchComponent = (function () {
    function SearchComponent(menuService, userService) {
        this.menuService = menuService;
        this.userService = userService;
        this.users = [];
        this.items = [];
        this.loading = true;
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
        this.loadsearchItems();
    };
    SearchComponent.prototype.deleteUser = function (_id) {
        var _this = this;
        this.userService.delete(_id).subscribe(function () { _this.loadAllUsers(); });
    };
    SearchComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
        this.loading = false;
    };
    SearchComponent.prototype.loadsearchItems = function () {
        var _this = this;
        this.menuService.getAll().subscribe(function (items) { _this.items = items; });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'search.component.html',
    }),
    __metadata("design:paramtypes", [index_2.MenuService, index_1.UserService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map