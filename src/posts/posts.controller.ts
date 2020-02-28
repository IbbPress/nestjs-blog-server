import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiProperty } from '@nestjs/swagger';

import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { PostEntity } from "./posts.entity";
import { PostService } from "./posts.service";

@Controller('api/posts')
export class PostsController {
  constructor(private readonly postService: PostService){}

  @Get()
  @ApiTags('博客')
  @ApiOperation({ summary: '博客列表' })
  async findAll (@Query() query) {
    const data = await this.postService.findAll();
    return { data }
  }

  @Get(':id')
  @ApiTags('博客')
  @ApiOperation({ summary: '获取博客详细信息'})
  async findOne(@Param('id') id: string) {
    const data = await this.postService.findOne(id)
    return { data }
  }

  @Post()
  @ApiTags('博客')
  @ApiOperation({ summary: '创建博客'})
  async create(@Body() createPostDto: CreatePostDto) {
    const data = await this.postService.create(createPostDto)
    return { data }
  }

  @Put(':id')
  @ApiTags('博客')
  @ApiOperation({ summary: '更新博客'})
  async update(@Param('id') id: string, @Body() updatePostData: UpdatePostDto) {
    const data = await this.postService.update(id, updatePostData)
    return { data }
  }

  @Delete(':id')
  @ApiTags('博客')
  @ApiOperation({ summary: '删除博客'})
  async remove(@Param('id') id: string) {
    const data = await this.postService.remove(id)
    return { data }
  }

}
