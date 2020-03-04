import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {
  @ApiProperty({ description: '用户名', example: 'wencai' })
  username: string;
  @ApiProperty({ description: '密码', example: '123456' })
  password: string
  @ApiProperty({ description: '真实姓名', example: 'zhang'})
  realName: string;
  @ApiProperty({ description: '电子邮件', example: '1052642137@qq.com'})
  email: string;
  @ApiProperty({ description: '个人说明', example: '一个青年'})
  desc: string;
  @ApiProperty({ description: '头像', example: 'zhang'})
  avator: string;
}