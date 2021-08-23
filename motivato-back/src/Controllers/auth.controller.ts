/*
https://docs.nestjs.com/controllers#controllers
Controller containing authentication access points such as login, logout and register.
*/

import { Controller, Get, Post } from "@nestjs/common";

@Controller("auth")
export class AuthController {
  constructor() {}

  @Post("register")
  register(): void {}
}
