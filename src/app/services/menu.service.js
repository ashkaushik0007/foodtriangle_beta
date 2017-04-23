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
var http_1 = require("@angular/http");
var app_config_1 = require("../app.config");
var MenuService = (function () {
    function MenuService(http, config) {
        this.http = http;
        this.config = config;
    }
    MenuService.prototype.getAll = function () {
        return this.http.get(this.config.apiUrl + '/menus/getAllitems').map(function (response) { return response.json(); });
    };
    MenuService.prototype.getById = function (_id) {
        return this.http.get(this.config.apiUrl + '/menus/' + _id).map(function (response) { return response.json(); });
    };
    MenuService.prototype.add = function (menu) {
        return this.http.post(this.config.apiUrl + '/menus/addItem', menu);
    };
    MenuService.prototype.update = function (menu) {
        return this.http.put(this.config.apiUrl + '/menus/updateItem' + menu._id, menu);
    };
    MenuService.prototype.delete = function (_id) {
        return this.http.delete(this.config.apiUrl + '/menus/deleteItem' + _id);
    };
    return MenuService;
}());
MenuService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map