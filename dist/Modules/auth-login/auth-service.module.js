"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServiceModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_service_1 = require("./auth-service.service");
const auth_service_controller_1 = require("./auth-service.controller");
const google_strategy_1 = require("./google.strategy");
const facebook_strategy_1 = require("./facebook.strategy");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../ENTITY/User/user.entity");
let AuthServiceModule = exports.AuthServiceModule = class AuthServiceModule {
};
exports.AuthServiceModule = AuthServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity])],
        providers: [auth_service_service_1.AuthServiceService, google_strategy_1.GoogleStrategy, facebook_strategy_1.FacebookStrategy],
        controllers: [auth_service_controller_1.AuthServiceController]
    })
], AuthServiceModule);
//# sourceMappingURL=auth-service.module.js.map