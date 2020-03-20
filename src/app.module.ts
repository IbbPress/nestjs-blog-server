import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
const MAO = require('multer-aliyun-oss');
const crypto = require('crypto');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
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
    TypeOrmModule.forRoot(),
    PostsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
