# Nestjs 开发博客 Server 端

基于TypeScript的NodeJs框架：Nestjs 开发博客 Server 端 ( nodejs + nestjs + mysql)

## 表结构

### posts 表结构
| column   | dataType    | pk主键 | nn 不为空 | AI自动增加 | 默认值 |
| ---      | ---         | ---    | ---      |---        | ---    |
| id       | int         | Y      |Y         | Y         |        |
| title    | varchar(50) |        |Y         |           |        |
| content  | longtext    |        |Y         |           |        |
| createAt | bigint(20)  |        |Y         |           |    0   |
| author   | varchar(20) |        |Y         |           |        |

### users 表结构

| column   | dataType    | pk主键 | nn 不为空 | AI自动增加 | 默认值 |
| ---      | ---         | ---    | ---      |---        | ---    |
| id       | int         | Y      | Y        | Y         |        |
| username | varchar(20) |        | Y        |           |        |
| realName | varchar(10) |        | Y        |           |        |
| password | varchar(20) |        | Y        |           |        |

### 关于数据类型

- `int`: 数字类型
- `bigint` 数字类型，但是范围要比 `int` 类型大，毫秒级时间戳 13 位，无法使用 `int` 类型
- `varchar(20)`: 表示长度为 20 的字符串
- `longtext`: 可以存储很大的内容，不再限制长度，最大可以存储 4G 大小

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
