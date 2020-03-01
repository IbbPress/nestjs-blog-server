import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
  @ApiProperty({ description: '用户名', example: 'wencai' })
  username: string;
  @ApiProperty({ description: '真实姓名', example: 'zhang'})
  realName: string;
  @ApiProperty({ description: '电子邮件', example: 'zhang'})
  email: string;
  @ApiProperty({ description: '个人说明', example: 'zhang'})
  desc: string;
  @ApiProperty({ description: '头像', example: 'zhang'})
  avator: string;
}
