import { Body, Controller, FileTypeValidator, Get, MaxFileSizeValidator, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ChatService } from './chat.service';
import { createMessageDto } from 'src/DTOs/Chat/createMessage.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/services/cloudinary/cloudinary.service';
import { CHAT_USER } from 'src/Config/constantService';

@Controller('chat')
export class ChatController {
    constructor(private messageService: ChatService,private cloudinaryService: CloudinaryService){}

    @Post('send')
    async sendMessage(@Body() createMessage: createMessageDto){
        return await this.messageService.sendMessage(createMessage);
    }

    @Post('sendMessageImage')
    @UseInterceptors(FileInterceptor('file'))
    async sendMessageImage(@Body() createMessage: createMessageDto,@UploadedFile()file: Express.Multer.File,){

        var res = this.cloudinaryService.uploadFile(file, CHAT_USER);

        return await this.messageService.sendMessageImage(createMessage,(await res).secure_url);
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
