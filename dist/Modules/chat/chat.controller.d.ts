import { ChatService } from './chat.service';
import { createMessageDto } from 'src/DTOs/Chat/createMessage.dto';
export declare class ChatController {
    private messageService;
    constructor(messageService: ChatService);
    sendMessage(createMessage: createMessageDto): Promise<{
        msg: string;
        value?: undefined;
        sucess?: undefined;
    } | {
        msg: string;
        value: Promise<import("../../ENTITY/ChatEntity/Message.entity").MessageEntity>;
        sucess?: undefined;
    } | {
        msg: string;
        value: any;
        sucess: boolean;
    }>;
    getSms(): Promise<import("../../ENTITY/ChatEntity/Message.entity").MessageEntity[]>;
}
