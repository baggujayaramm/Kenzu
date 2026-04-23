"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const prisma_module_1 = require("./prisma/prisma.module");
const self_module_1 = require("./self/self.module");
const health_module_1 = require("./health/health.module");
const mind_module_1 = require("./mind/mind.module");
const notifications_module_1 = require("./notifications/notifications.module");
const food_module_1 = require("./food/food.module");
const commerce_module_1 = require("./commerce/commerce.module");
const productivity_module_1 = require("./productivity/productivity.module");
const community_module_1 = require("./community/community.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, users_module_1.UsersModule, prisma_module_1.PrismaModule, self_module_1.SelfModule, health_module_1.HealthModule, mind_module_1.MindModule, notifications_module_1.NotificationsModule, food_module_1.FoodModule, commerce_module_1.CommerceModule, productivity_module_1.ProductivityModule, community_module_1.CommunityModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map