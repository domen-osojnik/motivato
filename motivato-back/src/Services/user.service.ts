/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/Models/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  // (+) User service will use user entity
  // (+) Repository is like a database model source
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }
}
