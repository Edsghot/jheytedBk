import { createMessageDto } from 'src/DTOs/Chat/createMessage.dto';
import { MessageEntity } from 'src/ENTITY/ChatEntity/Message.entity';
import { UserEntity } from 'src/ENTITY/User/user.entity';
import { Repository } from 'typeorm';
export declare class ChatService {
    private messageRepository;
    private userRepository;
    constructor(messageRepository: Repository<MessageEntity>, userRepository: Repository<UserEntity>);
    getAllSms(): Promise<MessageEntity[]>;
    sendMessage(message: createMessageDto): Promise<{
        msg: string;
        value?: undefined;
        sucess?: undefined;
    } | {
        msg: string;
        value: Promise<MessageEntity>;
        sucess?: undefined;
    } | {
        msg: string;
        value: any;
        sucess: boolean;
    }>;
}
