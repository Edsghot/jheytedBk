"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidateSmsModule = void 0;
const common_1 = require("@nestjs/common");
const auth_validate_sms_service_1 = require("./auth-validate-sms.service");
const auth_validate_sms_controller_1 = require("./auth-validate-sms.controller");
const nestjs_twilio_1 = require("nestjs-twilio");
let AuthValidateSmsModule = exports.AuthValidateSmsModule = class AuthValidateSmsModule {
};
exports.AuthValidateSmsModule = AuthValidateSmsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_twilio_1.TwilioModule.forRoot({
                accountSid: 'ACa9c24fdab76555907f88cc241b9a06e5',
                authToken: '4187a59d8d22811c2ea726c0bea005e0',
            }),
        ],
        providers: [auth_validate_sms_service_1.AuthValidateSmsService],
        controllers: [auth_validate_sms_controller_1.AuthValidateSmsController]
    })
], AuthValidateSmsModule);
//# sourceMappingURL=auth-validate-sms.module.js.map