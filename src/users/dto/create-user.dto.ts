import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ description: '用户名', example: 'wencai' })
  username: string;
  @ApiProperty({ description: '真实姓名', example: 'zhang'})
  realName: string;
}
