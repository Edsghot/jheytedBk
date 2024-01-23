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
const twilio_service_1 = require("nestjs-twilio/dist/module/twilio.service");
let AuthValidateSmsService = exports.AuthValidateSmsService = class AuthValidateSmsService {
    constructor(twilioService) {
        this.twilioService = twilioService;
    }
    async sendSMS() {
        try {
            return await this.twilioService.client.messages.create({
                body: 'SMS Body, sent to the phone!',
                from: '926706376',
                to: '926706376',
            });
        }
        catch (e) {
            return {
                mes: e.message,
                mess: e
            };
        }
    }
};
exports.AuthValidateSmsService = AuthValidateSmsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [twilio_service_1.TwilioService])
], AuthValidateSmsService);
//# sourceMappingURL=auth-validate-sms.service.js.map