import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'longtext' })
  content: string;

  @Column({ type: 'longtext', nullable: true })
  contentHtml: string;

  @Column({ default: 'wencaizhang' })
  author: string;

  @Column({ type: 'bigint', width: 25, default: null })
  createAt: number;
  
  @Column({ type: 'bigint', width: 25, default: null })
  updateAt: number;
  
  @Column({ default: false })
  isPublic: boolean;

  @Column({ default: false })
  del: boolean;
}
