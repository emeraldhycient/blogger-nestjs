import { Category } from './entities/category.entity';
import { PrismaService } from './../prisma.service';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly PrismaService: PrismaService) { }

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const category = await this.PrismaService.category.create({
        data: {
          title: createCategoryDto.title,
        }
      })
      return {
        category,
        message: "category created successfully"
      };
    } catch (error) {
      throw new InternalServerErrorException(error)
    }

  }

  async findAll() {
    try {
      const Categories = await this.PrismaService.category.findMany()
      return {
        Categories,
        message: "Categories fetched successfully"
      }
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async findOne(id: string) {
    try {
      const Category = await this.PrismaService.category.findUnique({
        where: {
          id
        }
      }
      )
      return {
        Category,
        message: "Category fetched successfully"
      }
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    try {
      const Category = await this.PrismaService.category.update({
        where: {
          id
        },
        data: {
          title: updateCategoryDto.title
        }
      })
      return {
        Category,
        message: "Category updated successfully"
      }

    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async remove(id: string) {
    try {
      const Category = await this.PrismaService.category.delete({
        where: {
          id
        }
      })
      return {
        Category,
        message: "Category deleted successfully"
      }
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }
}
