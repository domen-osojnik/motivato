import { UserService } from "./Services/user.service";
import { UserController } from "./Controllers/user.controller";

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import TypeOrmConfig, { typeOrmConfigAsync } from "./Config/app.dbconfig";
import { UserModule } from "./Modules/user.module";

@Module({
  imports: [UserModule, TypeOrmModule.forRootAsync(typeOrmConfigAsync)],
  controllers: [],
  providers: [],
})
export class AppModule {}
