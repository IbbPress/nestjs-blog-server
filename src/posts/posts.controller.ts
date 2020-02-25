import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiProperty } from '@nestjs/swagger';

class CreatePostDto {
  @ApiProperty({ description: '博客标题', example: '博客标题' })
  title: string
  @ApiProperty({ description: '博客内容', example: '博客内容' })
  content: string
}

@Controller('posts')
export class PostsController {

  @Get()
  @ApiTags('博客')
  @ApiOperation({ summary: '博客列表' })
  findAll (@Query() query) {
    return [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ]
  }

  @Get(':id')
  @ApiTags('博客')
  @ApiOperation({ summary: '获取博客详细信息'})
  findOne(@Query('id') id: string) {
    return { id: 1 }
  }

  @Post()
  @ApiTags('博客')
  @ApiOperation({ summary: '创建博客'})
  create(@Body() body: CreatePostDto, ) {
    return { message: '创建成功' }
  }

  @Put(':id')
  @ApiTags('博客')
  @ApiOperation({ summary: '更新博客'})
  update(@Param('id') id: string, @Body() updatePostData: CreatePostDto) {
    return { message: '更新成功' }
  }

  @Delete(':id')
  @ApiTags('博客')
  @ApiOperation({ summary: '删除博客'})
  remove(@Param('id') id: string) {
    return { message: '删除成功' }
  }

}
