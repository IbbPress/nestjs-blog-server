import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from  'multer';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('api/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: 'uploads/',
      filename: function (req, file, cb) {
        console.log('filename ------');
        const fileFormat = (file.originalname).split(".");
        const filename = `${fileFormat[0]}-${Date.now()}.${fileFormat[fileFormat.length - 1]}`
        cb(null, filename)
      }
    })
  }))
  async uploadFile (@UploadedFile('file') file) {
    console.log(file);
    console.log(file.filename);
    return {
      url: `http://localhost:3000/uploads/${file.filename}`
    }
  }
}
