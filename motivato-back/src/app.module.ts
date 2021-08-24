import { AuthModule } from "./Modules/auth.module";
import { PostModule } from "./Modules/post.module";
import { PostController } from "./Controllers/post.controller";
import { AuthService } from "./Services/auth.service";
import { AuthController } from "./Controllers/auth.controller";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import TypeOrmConfig, { typeOrmConfigAsync } from "./Config/app.dbconfig";
import { UserModule } from "./Modules/user.module";

@Module({
  imports: [
    AuthModule,
    PostModule,
    UserModule,
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
