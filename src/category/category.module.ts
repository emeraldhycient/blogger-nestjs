import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongoModule } from 'src/mongo/mongo.module';

@Module({
  imports : [MongoModule],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
