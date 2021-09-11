/*
https://docs.nestjs.com/controllers#controllers
Controller containing authentication access points such as login, logout and register.
*/

import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "src/Services/auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/register")
  async registerUser() {}
}
