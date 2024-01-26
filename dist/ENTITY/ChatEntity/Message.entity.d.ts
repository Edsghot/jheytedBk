import { UserEntity } from "../User/user.entity";
export declare class MessageEntity {
    IdMessage: number;
    Text: string;
    Image: string;
    User: UserEntity;
    createDate: Date;
}
