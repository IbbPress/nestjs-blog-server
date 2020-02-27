import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiProperty } from '@nestjs/swagger';

import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { PostEntity } from "./posts.entity";
import { PostService } from "./posts.service";

@Controller('posts') 
export class PostsController {
  constructor(private readonly postService: PostService){}

  @Get()
  @ApiTags('博客')
  @ApiOperation({ summary: '博客列表' })
  findAll (@Query() query): Promise<PostEntity[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  @ApiTags('博客')
  @ApiOperation({ summary: '获取博客详细信息'})
  findOne(@Query('id') id: string) {
    return this.postService.findOne(id)
  }

  @Post()
  @ApiTags('博客')
  @ApiOperation({ summary: '创建博客'})
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto)
  }

  @Put(':id')
  @ApiTags('博客')
  @ApiOperation({ summary: '更新博客'})
  update(@Param('id') id: string, @Body() updatePostData: UpdatePostDto) {
    return this.postService.update(id, updatePostData)
  }

  @Delete(':id')
  @ApiTags('博客')
  @ApiOperation({ summary: '删除博客'})
  remove(@Param('id') id: string) {
    return this.postService.remove(id)
  }

}
