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
exports.AuthValidateSmsService = void 0;
const common_1 = require("@nestjs/common");
const twilio_1 = require("twilio");
let AuthValidateSmsService = exports.AuthValidateSmsService = class AuthValidateSmsService {
    constructor() {
        this.twilioClient = (0, twilio_1.default)('ACa9c24fdab76555907f88cc241b9a06e5', '4187a59d8d22811c2ea726c0bea005e0');
    }
    async sendVerificationCode(phoneNumber, code) {
        try {
            await this.twilioClient.messages.create({
                body: `Tu código de verificación es: ${code}`,
                from: 'TU_NUMERO_TWILIO',
                to: phoneNumber,
            });
        }
        catch (error) {
            console.error(error.message);
            throw new Error('Error al enviar el código de verificación por SMS');
        }
    }
};
exports.AuthValidateSmsService = AuthValidateSmsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AuthValidateSmsService);
//# sourceMappingURL=auth-validate-sms.service.js.map