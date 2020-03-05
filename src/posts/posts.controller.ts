import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiProperty } from '@nestjs/swagger';

import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { PostsQuery } from "./dto/posts-query.dto";
import { PostEntity } from "./posts.entity";
import { PostService } from "./posts.service";

@Controller('api/posts')
@ApiTags('博客')
export class PostsController {
  constructor(private readonly postService: PostService){}

  @Get()
  @ApiOperation({ summary: '博客列表' })
  async findAll (@Query() query: PostsQuery) {
    const { pageSize=10, pageNo=1 } = query;
    const page = {
      pageSize: Number(pageSize),
      pageNo: Number(pageNo)
    }
    const result = await this.postService.findAll(query);
    return { data: result[0], count: result[1], ...page }
  }

  @Get(':id')
  @ApiOperation({ summary: '获取博客详细信息'})
  async findOne(@Param('id') id: string) {
    const data = await this.postService.findOne(id)
    return { data }
  }

  @Post()
  @ApiOperation({ summary: '创建博客'})
  async create(@Body() createPostDto: CreatePostDto) {
    const data = await this.postService.create(createPostDto)
    return { data }
  }

  @Put(':id')
  @ApiOperation({ summary: '更新博客'})
  async update(@Param('id') id: string, @Body() updatePostData: UpdatePostDto) {
    const data = await this.postService.update(id, updatePostData)
    return { data }
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除博客'})
  async remove(@Param('id') id: string) {
    const data = await this.postService.remove(id)
    return { data }
  }

}
