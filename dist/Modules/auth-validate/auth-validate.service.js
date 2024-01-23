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
exports.AuthValidateService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let AuthValidateService = exports.AuthValidateService = class AuthValidateService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    sendMail() {
        this.mailerService.sendMail({
            to: 'ledgoy0321@gmail.com',
            from: 'edsghot@gmail.com',
            subject: 'Probando la validacion',
            text: 'welcomee Ed',
            html: '<b>departe de Ed</b>',
        });
    }
};
exports.AuthValidateService = AuthValidateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], AuthValidateService);
//# sourceMappingURL=auth-validate.service.js.map