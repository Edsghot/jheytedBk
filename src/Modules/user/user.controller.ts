import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  MaxFileSizeValidator,
  UploadedFile,
  ParseFilePipe,
  FileTypeValidator,
  Put,
} from '@nestjs/common';
import { createUserDto } from '../../DTOs/User/create-user.dto';
import { UserService } from './user.service';
import { loginUsers } from '../../DTOs/User/loginUser.dto';
import { ValidateEmailDto } from 'src/DTOs/ValidateEmail/validateEmail.dto';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/services/cloudinary/cloudinary.service';
import { FOLDER_USER } from 'src/Config/constantService';
import { UpdateUserDto } from 'src/DTOs/User/updateUser.dto';
import { RecoverPasswordDto } from 'src/DTOs/User/recoverPassword.dto';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private cloudinaryService: CloudinaryService,
  ) {}
  @Get()
  async getUsers() {
    return await this.userService.getAllUser();
  }
  @Get(':idUser') 
  getById(@Param('idUser') idUser: number) {
    return this.userService.getbyId(idUser); 
  }

  @Post('insert')
  createUser(@Body() newUser: createUserDto) {
    return this.userService.createUser(newUser);
  }
  @Post('login')
  async loginUser(@Body() loginUser: loginUsers) {
    return await this.userService.loginUser(loginUser);
  }

  @Post('validate')
  async validateCode(@Body() data: ValidateEmailDto) {
    var res = await this.userService.validateCode(data);
    return res;
  }

  @Put('updateImageProfile/:idUser')
  @UseInterceptors(FileInterceptor('file'))
  async updateImageProfile(
    @Param('idUser') idUser: number,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
          new FileTypeValidator({ fileType: '(png|jpeg|jpg)' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    var res = this.cloudinaryService.uploadFile(file, FOLDER_USER);

    return await this.userService.updateProfile(idUser, (await res).secure_url);
  }

  @Put('updateUser')
  @UseInterceptors(FileInterceptor('file'))
  async updateUser(
    @Body() update: UpdateUserDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (file) {
      var res = this.cloudinaryService.uploadFile(file, FOLDER_USER);

      return await this.userService.updateUser(update, (await res).secure_url);
    }

    return await this.userService.updateUser(update, null);
  }

  @Put('recoverPassword')
  async recoverPassword(@Body() update: RecoverPasswordDto) {
    return await this.userService.recoverPassword(update);
  }
}

