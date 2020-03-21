import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from "./posts.entity";

import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

const _ = require("lodash")

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly PostsRepo: Repository<PostEntity>,
  ){}
  
  async findAll(option): Promise<any> {
    const { pageSize=10, pageNo=1, sortField='createAt', sortOrder='descend' } = option;
    const orderMap = {
      ascend: 'ASC',
      descend: 'DESC',
    }
    const order = { [sortField]: orderMap[sortOrder] }
    // console.log('order is', order)
    return this.PostsRepo.findAndCount({
      take: pageSize,
      skip: pageSize * (pageNo - 1),
      order: order,
      select: ['id', 'title', 'createAt', 'updateAt', 'isPublic', 'del']
    })
  }

  findOne(id: string): Promise<PostEntity> {
    return this.PostsRepo.findOne(id);
  }

  public(id: number): Promise<any> {
    return this.PostsRepo.update(id, { isPublic: true });
  }

  create(createPostDto: CreatePostDto): Promise<PostEntity> {
    const post = new PostEntity();
    post.title = createPostDto.title;
    post.content = createPostDto.content;
    post.author = createPostDto.author;
    post.createAt = Date.now()
    console.log('post is: ', post);
    
    return this.PostsRepo.save(post);
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<PostEntity> {
    const { title, content, isPublic } = updatePostDto
    const updateAt = Date.now()
    const post = await this.PostsRepo.findOne(id)

    const data = { updateAt }
    if (!_.isUndefined(title)) {
      Object.assign(data, { title })
    }
    if (!_.isUndefined(content)) {
      Object.assign(data, { content })
    }
    if (!_.isUndefined(isPublic)) {
      Object.assign(data, { isPublic })
    }

    this.PostsRepo.merge(post, data)
    return this.PostsRepo.save(post)
  }

  async remove(id: string): Promise<void> {
    await this.PostsRepo.delete(id);
  }
}
