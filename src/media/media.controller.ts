import { Controller, Post, Delete, UseInterceptors, UploadedFile, Get, Param, } from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiTags, ApiConsumes, ApiBody, ApiProperty } from '@nestjs/swagger';
import { MediaService } from "./media.service";

class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}

@Controller('api/media')
@ApiTags('媒体库')
export class MediaController {

  constructor(private readonly mediaService: MediaService){}

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: '文件上传',
    type: FileUploadDto,
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile (@UploadedFile('file') file) {
    const date = new Date()
    file.url = file.url.replace(process.env.OSS_ALIYUN_DOMAIN, process.env.OSS_MY_DOMAIN)
    file.date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    file.oss = 'aliyun'
    file.name = file.originalname
    
    const resp = await this.mediaService.create(file)
    console.log(file);
    file.id = resp.id
    
    return file
  }

  @Get('list')
  async getList () {
    const result = await this.mediaService.findAll({})
    return result;
  }

  @Delete(':id')
  async remove (@Param('id') id: string) {
    const result = await this.mediaService.remove(id)
    return { desc: '删除成功' };
  }
}
