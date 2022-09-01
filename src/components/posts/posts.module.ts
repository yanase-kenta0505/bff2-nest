import { Module } from "@nestjs/common";
import { PostsResolver } from "./post.resolvers";
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [PostsResolver],
})

export class PostsModule {}