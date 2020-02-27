import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
  @ApiProperty({ description: '博客标题', example: '博客标题' })
  title: string
  @ApiProperty({ description: '博客内容', example: '博客内容' })
  content: string
  @ApiProperty({ description: '博客作者', example: 'wencaizhang' })
  author: string
}