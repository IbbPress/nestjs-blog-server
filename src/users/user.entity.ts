import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  realName: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
