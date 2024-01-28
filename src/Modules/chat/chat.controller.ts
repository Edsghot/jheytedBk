import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { createMessageDto } from 'src/DTOs/Chat/createMessage.dto';

@Controller('chat')
export class ChatController {
    constructor(private messageService: ChatService){}

    @Post('send')
    async sendMessage(@Body() createMessage: createMessageDto){
        return await this.messageService.sendMessage(createMessage);
    }

    @Get('getAll')
    getSms(){
        return this.messageService.getAllSms();
    }
    
    @Get('test')
    async getTest(){
        return await this.messageService.test();
    }

}
