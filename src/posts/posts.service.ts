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
  
  async findAll(): Promise<PostEntity[]> {
    return this.PostsRepo.find();
  }

  findOne(id: string): Promise<PostEntity> {
    return this.PostsRepo.findOne(id);
  }

  create(createPostDto: CreatePostDto): Promise<PostEntity> {
    const user = new PostEntity();
    user.title = createPostDto.title;
    user.content = createPostDto.content;
    user.author = createPostDto.author;

    return this.PostsRepo.save(user);
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<PostEntity> {
    const { title, content } = updatePostDto
    const post = await this.PostsRepo.findOne(id)
    this.PostsRepo.merge(post, {
      title, content
    })
    return this.PostsRepo.save(post)
  }

  async remove(id: string): Promise<void> {
    await this.PostsRepo.delete(id);
  }
}
