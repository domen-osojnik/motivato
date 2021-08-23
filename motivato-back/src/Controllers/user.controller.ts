/*
API containing user logic, such as profile editing.
*/

import { Controller, Get } from "@nestjs/common";
import { User } from "src/Models/user.entity";
import { UserService } from "src/Services/user.service";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }
}
