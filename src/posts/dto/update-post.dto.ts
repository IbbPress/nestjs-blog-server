import { ApiProperty } from "@nestjs/swagger";

export class UpdatePostDto {
  @ApiProperty({ description: '博客标题', example: '博客标题', required: false })
  title: string

  @ApiProperty({ description: '博客内容', example: '博客内容', required: false })
  content: string

  @ApiProperty({ description: '发布状态', example: true, required: false })
  isPublic: boolean
}