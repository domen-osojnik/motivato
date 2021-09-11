import { PostService } from "./../Services/post.service";
/*
https://docs.nestjs.com/modules
*/

import { Module } from "@nestjs/common";
import { PostController } from "src/Controllers/post.controller";

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
