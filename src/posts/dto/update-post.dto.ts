import { ApiProperty } from "@nestjs/swagger";

export class UpdatePostDto {

  @ApiProperty({ description: '博客标题', example: '博客标题', required: false })
  title: string

  @ApiProperty({ description: '博客内容', example: '博客内容', required: false })
  content: string

  @ApiProperty({ description: '发布状态', example: true, required: false })
  isPublic: boolean

  @ApiProperty({ description: '分类目录', example: "[1,2]" })
  categories: string[]

  @ApiProperty({ description: '标签', example: "[1,2]" })
  tags: string[]

  @ApiProperty({ description: '摘要' })
  summary: string;

  @ApiProperty({ description: '永久链接', example: "how-to-read-a-book" })
  slug: string;

  @ApiProperty({ description: '特色图片' })
  img: string
}