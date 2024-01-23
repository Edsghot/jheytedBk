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
exports.AuthValidateService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const RespMessage_dto_1 = require("../../DTOs/Message/RespMessage.dto");
const ValidateEmailSms_entity_1 = require("../../ENTITY/AuthEntity/ValidateEmailSms.entity");
const typeorm_2 = require("typeorm");
let AuthValidateService = exports.AuthValidateService = class AuthValidateService {
    constructor(mailerService, validateRepository) {
        this.mailerService = mailerService;
        this.validateRepository = validateRepository;
    }
    async sendMail(email) {
        var res = new RespMessage_dto_1.ResMessage();
        const code = '789456';
        var existing = await this.validateRepository.findOne({
            where: { Email: email }
        });
        if (existing != null) {
            await this.validateRepository.delete(existing);
        }
        var nuevo = new ValidateEmailSms_entity_1.ValidateEmailSmsEntity();
        nuevo.Email = email;
        nuevo.Code = code;
        const newValidate = this.validateRepository.create(nuevo);
        await this.validateRepository.save(newValidate);
        await this.mailerService.sendMail({
            to: email,
            from: 'edsghot@gmail.com',
            subject: 'Por favor verifique su dirección de correo electrónico',
            text: 'welcomee Dizzgo',
            html: `<p style="border: 1px solid #ccc; padding: 10px;">Hola, ${email}. <br> <br> A continuación, le enviamos su código de verificación de correo electrónico: <br><br><strong>${code}</strong> <br></p>`,
        });
        return res.resultOK("Se envio correctamente");
    }
};
exports.AuthValidateService = AuthValidateService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(ValidateEmailSms_entity_1.ValidateEmailSmsEntity)),
    __metadata("design:paramtypes", [mailer_1.MailerService, typeorm_2.Repository])
], AuthValidateService);
//# sourceMappingURL=auth-validate.service.js.map