import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";

@Controller('auth')
@ApiTags('认证')
export class AuthController {
  @Post('register')
  @ApiOperation({ summary: '用户注册'})
  async register (@Body() dto: RegisterDto) {
    return dto
  }

  @Post('login')
  @ApiOperation({ summary: '用户登录'})
  async login (@Body() dto: LoginDto) {
    return dto
  }

  @Get('user')
  @ApiOperation({ summary: '获取用户信息'})
  async user () {
    return {}
  }
}

