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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("@nestjs/typeorm/dist");
const user_entity_1 = require("../../ENTITY/User/user.entity");
const typeorm_1 = require("typeorm");
const RespMessage_dto_1 = require("../../DTOs/Message/RespMessage.dto");
const ValidateEmailSms_entity_1 = require("../../ENTITY/AuthEntity/ValidateEmailSms.entity");
let UserService = exports.UserService = class UserService {
    constructor(userRepository, validateRepository) {
        this.userRepository = userRepository;
        this.validateRepository = validateRepository;
    }
    createUser(user) {
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }
    getbyId(idUser) {
        return this.userRepository.findOne({
            where: { IdUser: idUser }
        });
    }
    async loginUser(user) {
        const { Email, Password } = user;
        const existingUser = await this.userRepository.findOne({
            where: { Email, Password }
        });
        if (existingUser) {
            return existingUser;
        }
        else {
            return { msg: "credenciales invalidas" };
        }
    }
    getAllUser() {
        return this.userRepository.find();
    }
    deleteUser() { }
    updateUser() { }
    async validateCode(data) {
        var res = new RespMessage_dto_1.ResMessage();
        const { Email, Code } = data;
        var existing = await this.validateRepository.findOne({
            where: { Email }
        });
        if (existing === null) {
            return res.resultFail("Error al validar código");
        }
        if (existing.Code === Code) {
            return res.resultOK("Está Correcto");
        }
        return res.resultFail("Error al validar código");
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, dist_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, dist_1.InjectRepository)(ValidateEmailSms_entity_1.ValidateEmailSmsEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository, typeorm_1.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map