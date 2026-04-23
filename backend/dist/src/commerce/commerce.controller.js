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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommerceController = void 0;
const common_1 = require("@nestjs/common");
const commerce_service_1 = require("./commerce.service");
const passport_1 = require("@nestjs/passport");
let CommerceController = class CommerceController {
    commerceService;
    constructor(commerceService) {
        this.commerceService = commerceService;
    }
    async getFeed(req) {
        return this.commerceService.getCuratedFeed(req.user.userId);
    }
    async getSubscriptions(req) {
        return this.commerceService.getSubscriptions(req.user.userId);
    }
    async addSubscription(req, data) {
        return this.commerceService.addSubscription(req.user.userId, data);
    }
};
exports.CommerceController = CommerceController;
__decorate([
    (0, common_1.Get)('feed'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommerceController.prototype, "getFeed", null);
__decorate([
    (0, common_1.Get)('subscriptions'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommerceController.prototype, "getSubscriptions", null);
__decorate([
    (0, common_1.Post)('subscriptions'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CommerceController.prototype, "addSubscription", null);
exports.CommerceController = CommerceController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('api/commerce'),
    __metadata("design:paramtypes", [commerce_service_1.CommerceService])
], CommerceController);
//# sourceMappingURL=commerce.controller.js.map