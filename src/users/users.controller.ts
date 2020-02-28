import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiTags('用户')
  @ApiOperation({ summary: '获取用户列表' })
  async findAll() {
    const data = await this.usersService.findAll();
    return { data };
  }

  @Post()
  @ApiTags('用户')
  @ApiOperation({ summary: '创建用户' })
  async create(@Body() createUserDto: CreateUserDto) {
    const data = await this.usersService.create(createUserDto);
    return { data };
  }

  @Get(':id')
  @ApiTags('用户')
  @ApiOperation({ summary: '获取用户信息' })
  async findOne(@Param('id') id: string) {
    const data = await this.usersService.findOne(id);
    return { data };
  }

  @Put(':id')
  @ApiTags('用户')
  @ApiOperation({ summary: '更新用户' })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const data = await this.usersService.update(id, updateUserDto);
    return { data };
  }

  @Delete(':id')
  @ApiTags('用户')
  @ApiOperation({ summary: '删除用户' })
  async remove(@Param('id') id: string) {
    const data = await this.usersService.remove(id);
    return { data };
  }
}
