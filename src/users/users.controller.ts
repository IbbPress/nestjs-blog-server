import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiTags('用户')
  @ApiOperation({ summary: '创建用户' })
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiTags('用户')
  @ApiOperation({ summary: '获取用户列表' })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiTags('用户')
  @ApiOperation({ summary: '获取用户信息' })
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  @ApiTags('用户')
  @ApiOperation({ summary: '删除用户' })
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
