/*
https://docs.nestjs.com/modules
*/

import { Module } from "@nestjs/common";
import { AuthController } from "src/Controllers/auth.controller";
import { AuthService } from "src/Services/auth.service";

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
