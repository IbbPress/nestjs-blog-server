import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  realName: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  desc: string;

  @Column({ nullable: true })
  avator: string;

  @Column({ default: true })
  isActive: boolean;
}
