import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('posts')
export class PostsController {

  @Get()
  list() {
    return [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ]
  }

  @Get(':id')
  detail() {
    return { id: 1 }
  }

  @Post()
  create() {
    return { message: '创建成功' }
  }

  @Put()
  update() {
    return { message: '更新成功' }
  }

  @Delete(':id')
  delete() {
    return { message: '删除成功' }
  }
  
}
