import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  
  async findAll(): Promise<User[]> {
    return this.usersRepository.find({ select: ["username", "realName", "email", "desc", "avator", "isActive"] });
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.realName = createUserDto.realName;
    user.email = createUserDto.email;
    user.desc = createUserDto.desc;
    user.avator = createUserDto.avator;

    return this.usersRepository.save(user);
  }

  async update(id: string, createUserDto: CreateUserDto): Promise<User> {
    const { username, realName, email, desc, avator } = createUserDto
    const user = await this.usersRepository.findOne(id);
    this.usersRepository.merge(user, {
      username, realName, email, desc, avator
    });
    console.log('user is: ', user);
    return this.usersRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
