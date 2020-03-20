import { Module } from '@nestjs/common';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { MulterModule } from '@nestjs/platform-express';
import { Media } from "./media.entity";
import { TypeOrmModule } from '@nestjs/typeorm';

const MAO = require('multer-aliyun-oss');
const crypto = require('crypto');

@Module({
  imports: [
    TypeOrmModule.forFeature([Media]),
    MulterModule.registerAsync({
      useFactory () {
        return {
          storage: MAO({
            config: {
              region: process.env.OSS_REGION,
              accessKeyId: process.env.OSS_ACCESS_KEY_ID,
              accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
              bucket: process.env.OSS_BUCKET
            },
            filename (req, file, cb) {
              crypto.pseudoRandomBytes(16, (err, raw) => {
                const date = new Date()
                const time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-`
                cb(err, err ? undefined : time + file.originalname);
              });
            }
          })
        }
      }
    }),
  ],
  controllers: [MediaController],
  providers: [MediaService]
})
export class MediaModule {}
