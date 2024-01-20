import { Module } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { AuthServiceController } from './auth-service.controller';
import { GoogleStrategy } from './google.strategy';
import { FacebookStrategy } from './facebook.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

@Module({
imports: [TypeOrmModule.forFeature([User])],
  providers: [AuthServiceService,GoogleStrategy,FacebookStrategy],
  controllers: [AuthServiceController]
})
export class AuthServiceModule {}
