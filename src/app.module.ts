import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from './mongo/mongo.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongoModule, PostModule, CommentModule, CategoryModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
