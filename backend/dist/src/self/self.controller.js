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
exports.SelfController = void 0;
const common_1 = require("@nestjs/common");
const self_service_1 = require("./self.service");
const passport_1 = require("@nestjs/passport");
let SelfController = class SelfController {
    selfService;
    constructor(selfService) {
        this.selfService = selfService;
    }
    getBriefing(req) {
        return this.selfService.getDailyBriefing(req.user.userId);
    }
    getMoods(req) {
        return this.selfService.getMoods(req.user.userId);
    }
    logMood(req, data) {
        return this.selfService.logMood(req.user.userId, data);
    }
};
exports.SelfController = SelfController;
__decorate([
    (0, common_1.Get)('briefing'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SelfController.prototype, "getBriefing", null);
__decorate([
    (0, common_1.Get)('moods'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SelfController.prototype, "getMoods", null);
__decorate([
    (0, common_1.Post)('moods'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SelfController.prototype, "logMood", null);
exports.SelfController = SelfController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('self'),
    __metadata("design:paramtypes", [self_service_1.SelfService])
], SelfController);
//# sourceMappingURL=self.controller.js.map