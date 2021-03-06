# Nestjs 开发博客 Server 端

[![nestjs](https://img.shields.io/badge/nestjs-%5E6.14.2-brightgreen.svg) ](https://github.com/nestjs/nest)
[![License](https://img.shields.io/npm/l/package.json.svg?style=flat)](https://github.com/IbbPress/nestjs-blog-server/blob/master/LICENSE)

基于TypeScript的NodeJs框架：Nestjs 开发博客 Server 端 ( nodejs + nestjs + mysql)

## 表结构

### posts 表结构

| column   | dataType    | pk主键 | nn 不为空 | AI自动增加  | 默认值  | 描述    |
| ---      | ---         | ---    | ---      |---        | ---    | ---    |
| id       | int         | Y      |Y         | Y         |        | 主键递增 |
| title    | varchar(50) |        |Y         |           |        | 标题    |
| content  | longtext    |        |Y         |           |        | 内容    |
| createAt | bigint(20)  |        |Y         |           |    0   | 创建时间 |
| updateAt | bigint(20)  |        |Y         |           |    0   | 更新时间 |
| author   | varchar(20) |        |Y         |           |        | 作者    |
| isPublic | tinyint     |        |Y         |           |        | 是否发布 |
| del      | tinyint     |        |Y         |           |        | 是否删除 |

### users 表结构

| column   | dataType    | pk主键 | nn 不为空 | AI自动增加  | 默认值  | 描述    |
| ---      | ---         | ---    | ---      |---        | ---    | ---    |
| id       | int         | Y      | Y        | Y         |        | 主键递增 |
| username | varchar(20) |        | Y        |           |        | 用户名   |
| nickName | varchar(10) |        | Y        |           |        | 真实名字 |
| password | varchar(20) |        | Y        |           |        | 密码    |
| avatar   | varchar(255) |       | Y        |           |        | 头像    |
| isActive | tinyint     |        | Y        |           |        | 是否可以使用  |
| email    | varchar(255) |        | Y        |           |        | 邮箱  |
| desc     | varchar(255) |        | Y        |           |        | 个人说明  |

### 关于数据类型

- `int`: 数字类型
- `bigint` 数字类型，但是范围要比 `int` 类型大，毫秒级时间戳 13 位，无法使用 `int` 类型
- `varchar(20)`: 表示长度为 20 的字符串
- `longtext`: 可以存储很大的内容，不再限制长度，最大可以存储 4G 大小

## RESTful API

### posts

- `GET /api/posts`: 博客列表
- `POST /api/posts`: 获取博客详细信息
- `GET /api/posts/:id`: 创建博客
- `PUT /api/posts/:id`: 更新博客
- `DELETE /api/posts/:id`: 删除博客

### users

- `GET /api/users`: 获取用户列表
- `POST /api/users`: 创建用户
- `GET /api/users/:id`: 获取用户信息
- `PUT /api/users/:id`: 更新用户信息
- `DELETE /api/users/:id`: 删除用户

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
