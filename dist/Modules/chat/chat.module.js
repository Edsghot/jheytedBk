"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModule = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./chat.service");
const chat_controller_1 = require("./chat.controller");
const typeorm_1 = require("@nestjs/typeorm");
const Message_entity_1 = require("../../ENTITY/ChatEntity/Message.entity");
const user_entity_1 = require("../../ENTITY/User/user.entity");
let ChatModule = exports.ChatModule = class ChatModule {
};
exports.ChatModule = ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Message_entity_1.MessageEntity]), typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity])],
        providers: [chat_service_1.ChatService],
        controllers: [chat_controller_1.ChatController]
    })
], ChatModule);
//# sourceMappingURL=chat.module.js.map