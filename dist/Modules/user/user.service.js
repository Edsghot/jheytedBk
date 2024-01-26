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
const ValidateEmailSms_entity_1 = require("../../ENTITY/AuthEntity/ValidateEmailSms.entity");
let UserService = exports.UserService = class UserService {
    constructor(userRepository, validateRepository) {
        this.userRepository = userRepository;
        this.validateRepository = validateRepository;
    }
    createUser(user) {
        var u = new user_entity_1.UserEntity();
        u.Email = user.Email;
        u.Password = user.Password;
        u.UserName = user.FirstName;
        u.Descrption = " __x____";
        u.FirstName = user.FirstName;
        u.LastName = user.LastName;
        u.BirthDate = user.BirthDate;
        u.Role = user_entity_1.UserRole.user;
        u.Points = 0;
        u.Phone = user.Phone;
        u.ProfileImage = "https://i.pinimg.com/736x/4b/a3/43/4ba343a87d8da59e1e4d0bdf7dc09484.jpg";
        u.DateAdded = new Date();
        u.IdGoogle = user.IdGoogle;
        u.IdFacebook = user.IdFacebook;
        try {
            const newUser = this.userRepository.create(u);
            return { msg: "Se creo correctamente",
                value: this.userRepository.save(newUser) };
        }
        catch (e) {
            return {
                msg: "error al registrar el usuario: " + e,
                succes: false
            };
        }
    }
    getbyId(idUser) {
        var user = this.userRepository.findOne({
            where: { IdUser: idUser }
        });
        if (user === null) {
            return {
                msg: "No existe ningun usuario que cuencida",
                value: null
            };
        }
        return {
            msg: " se encontro correctamente",
            value: user
        };
    }
    async loginUser(user) {
        const { Email, Password } = user;
        const existingUser = await this.userRepository.findOne({
            where: { Email, Password }
        });
        if (existingUser) {
            return { msg: "Ingreso correctamente",
                value: existingUser };
        }
        else {
            return { msg: "credenciales invalidas" };
        }
    }
    getAllUser() {
        return { msg: "Lista de Usuarios",
            value: this.userRepository.find() };
    }
    deleteUser() { }
    updateUser() { }
    async validateCode(data) {
        const { Email, Code } = data;
        var existing = await this.validateRepository.findOne({
            where: { Email }
        });
        if (existing === null) {
            return { msg: "Error en validar el codigo",
                value: false };
        }
        if (existing.Code === Code) {
            return { msg: "Esta correcto",
                value: true };
        }
        return { msg: "Error al validar código",
            value: false };
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, dist_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, dist_1.InjectRepository)(ValidateEmailSms_entity_1.ValidateEmailSmsEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository, typeorm_1.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map