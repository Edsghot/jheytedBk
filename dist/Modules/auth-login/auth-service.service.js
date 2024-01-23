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
exports.AuthServiceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../ENTITY/User/user.entity");
let AuthServiceService = exports.AuthServiceService = class AuthServiceService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async googleLogin(req) {
        if (!req.user) {
            return 'No user from google';
        }
        const { id } = req.user;
        const existingUser = await this.userRepository.findOne({
            where: { IdGoogle: id },
        });
        if (existingUser === null) {
            return {
                message: 'Aun no esta registrado',
                value: req.user,
                create: false
            };
        }
        return {
            message: 'Esta registrado',
            value: req.user,
            create: true
        };
    }
    async facebookLogin(req) {
        if (!req.user) {
            return 'esta registrado';
        }
        const { id } = req.user;
        const existingUser = await this.userRepository.findOne({
            where: { IdFacebook: id },
        });
        if (existingUser === null) {
            return {
                message: 'Aun no esta registrado',
                value: req.user,
                create: false
            };
        }
        return {
            message: 'Esta registrado',
            value: req.user,
            create: true
        };
    }
};
exports.AuthServiceService = AuthServiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthServiceService);
//# sourceMappingURL=auth-service.service.js.map