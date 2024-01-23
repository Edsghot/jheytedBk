"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidateModule = void 0;
const common_1 = require("@nestjs/common");
const auth_validate_service_1 = require("./auth-validate.service");
const auth_validate_controller_1 = require("./auth-validate.controller");
const mailer_1 = require("@nestjs-modules/mailer");
const ValidateEmailSms_entity_1 = require("../../ENTITY/AuthEntity/ValidateEmailSms.entity");
const typeorm_1 = require("@nestjs/typeorm");
let AuthValidateModule = exports.AuthValidateModule = class AuthValidateModule {
};
exports.AuthValidateModule = AuthValidateModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: {
                    service: 'gmail',
                    auth: {
                        user: 'edsghot@gmail.com',
                        pass: 'ngaflzpbwzqbqykh'
                    }
                }
            }), typeorm_1.TypeOrmModule.forFeature([ValidateEmailSms_entity_1.ValidateEmailSmsEntity])
        ],
        providers: [auth_validate_service_1.AuthValidateService],
        controllers: [auth_validate_controller_1.AuthValidateController]
    })
], AuthValidateModule);
//# sourceMappingURL=auth-validate.module.js.map