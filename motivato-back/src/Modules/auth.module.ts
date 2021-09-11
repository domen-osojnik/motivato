/*
https://docs.nestjs.com/modules
*/

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "src/Controllers/auth.controller";
import { User } from "src/Models/user.entity";
import { AuthService } from "src/Services/auth.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
