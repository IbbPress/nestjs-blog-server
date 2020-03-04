import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
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
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('api/upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: '文件上传',
    type: FileUploadDto,
  })
  @UseInterceptors(FileInterceptor('file', {
    // storage: diskStorage({
    //   destination: 'uploads/',
    //   filename: function (req, file, cb) {
    //     console.log('filename ------');
    //     const fileFormat = (file.originalname).split(".");
    //     const filename = `${fileFormat[0]}-${Date.now()}.${fileFormat[fileFormat.length - 1]}`
    //     cb(null, filename)
    //   }
    // })
  }))
  async uploadFile (@UploadedFile('file') file) {
    console.log(file);
    console.log(file.filename);
    file.url = file.url.replace(process.env.OSS_ALIYUN_DOMAIN, process.env.OSS_MY_DOMAIN)
    return file
  }
}
