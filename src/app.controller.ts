import { Controller, Get, Post, UseInterceptors, UploadedFile, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from  'multer';
import { ApiConsumes, ApiBody, ApiProperty } from '@nestjs/swagger';

class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(): object {
    return { message: 'Hello HBS!' };
  }

  @Post('api/upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: '文件上传',
    type: FileUploadDto,
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile (@UploadedFile('file') file) {
    file.url = file.url.replace(process.env.OSS_ALIYUN_DOMAIN, process.env.OSS_MY_DOMAIN)
    return file
  }
}
