import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from "./posts.entity";

import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

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
      order: order
    })
  }

  findOne(id: string): Promise<PostEntity> {
    return this.PostsRepo.findOne(id);
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
    const { title, content } = updatePostDto
    const updateAt = Date.now()
    const post = await this.PostsRepo.findOne(id)
    this.PostsRepo.merge(post, {
      title, content, updateAt
    })
    return this.PostsRepo.save(post)
  }

  async remove(id: string): Promise<void> {
    await this.PostsRepo.delete(id);
  }
}
