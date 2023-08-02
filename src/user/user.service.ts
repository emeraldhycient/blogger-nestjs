import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly PrismaService: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.PrismaService.user.create({ data: createUserDto })
      return {
        data: user,
        message: 'User created successfully',
      }
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async findAll() {
    try {
      const users = await this.PrismaService.user.findMany()
      return {
        data: users,
        message: "users found"
      }
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async findOne(id: string) {
    try {
      const users = await this.PrismaService.user.findUniqueOrThrow(
        {
          where: {
            id
          }

        }
      )
      return {
        data: users,
        message: "users found"
      }
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
