import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createMessageDto } from 'src/DTOs/Chat/createMessage.dto';
import { MessageEntity } from 'src/ENTITY/ChatEntity/Message.entity';
import { UserEntity } from 'src/ENTITY/User/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChatService {

    constructor(@InjectRepository(MessageEntity) private messageRepository: Repository<MessageEntity>,
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>){}


    async getAllSms(){
        const productSuppliers = await this.messageRepository.find({
            relations: ['User'], 
          });
          return productSuppliers;
    }

    async sendMessage(message: createMessageDto){
        
        var n = new MessageEntity();

        n.Text = message.Text;

        n.User = await this.userRepository.findOne({
            where: {IdUser: message.IdUser}
        })

        if(n.User === null || n.Text === null){
            return {msg: "error al enviar el mensaje"}
        }
        n.createDate = new Date();

        try{
         const newMessage = this.messageRepository.create(n)
         return {msg: "Se creo correctamente",
         value: this.messageRepository.save(newMessage)}
        }catch(e){
             return {
                 msg: "Error al enviar el mensaje: "+e,
                 value: null,
                 sucess: false
             }
        } 
     }
}