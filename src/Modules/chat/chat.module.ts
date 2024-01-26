import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from 'src/ENTITY/ChatEntity/Message.entity';
import { UserEntity } from 'src/ENTITY/User/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MessageEntity]),TypeOrmModule.forFeature([UserEntity])],
  providers: [ChatService],
  controllers: [ChatController]
})
export class ChatModule {}
