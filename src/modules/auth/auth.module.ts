import { Module } from '@nestjs/common';

import { CustomTypeOrmModule } from '@/common';
import { UserRepository } from '@/models';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [CustomTypeOrmModule.forCustomRepository([UserRepository])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
