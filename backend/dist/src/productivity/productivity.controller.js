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
exports.ProductivityController = void 0;
const common_1 = require("@nestjs/common");
const productivity_service_1 = require("./productivity.service");
const passport_1 = require("@nestjs/passport");
let ProductivityController = class ProductivityController {
    productivityService;
    constructor(productivityService) {
        this.productivityService = productivityService;
    }
    async getTimeline(req) {
        return this.productivityService.getTimeline(req.user.userId);
    }
    async getFinanceOverview(req) {
        return this.productivityService.getFinanceOverview(req.user.userId);
    }
};
exports.ProductivityController = ProductivityController;
__decorate([
    (0, common_1.Get)('timeline'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductivityController.prototype, "getTimeline", null);
__decorate([
    (0, common_1.Get)('finance'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductivityController.prototype, "getFinanceOverview", null);
exports.ProductivityController = ProductivityController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('api/productivity'),
    __metadata("design:paramtypes", [productivity_service_1.ProductivityService])
], ProductivityController);
//# sourceMappingURL=productivity.controller.js.map