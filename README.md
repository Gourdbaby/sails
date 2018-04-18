# sails-exercise-1-0-1

a [Sails v1](https://sailsjs.com) application


# Links

+ [Get started](https://sailsjs.com/get-started)
+ [Sails framework documentation](https://sailsjs.com/documentation)


# Introduction
sails后端项目一个Helloworld程序，实现了简单的增删改查
该项目对应前端项目地址[react-sails](https://github.com/huluwa123/react_sails)


# usage
+ step1 `git clone`
+ step2 `cd sails-exercise`
+ step3 `npm install`
+ 首先查看config文件中的`datastores.js`文件 配置好数据库 数据库我用的postgresql

```
adapter: 'sails-postgresql',
url: 'postgresql://user:password@host:port/database'
```
+ user-->用户名
+ password-->密码
+ host-->数据库地址IP
+ port-->端口
+ database-->链接的数据库

[sails数据库配置方法](https://sailsjs.com/documentation/concepts/extending-sails/adapters/available-adapters)

+ 该项目两个数据库表 user和user_list 可以从`api->models->`里的两个models看出，建议自行先创建好

现在你可以使用vscode F5 启动后端服务，然后通过 `react-sails`项目 去注册一个账号体验一下吧！

# Remark

联系QQ群 222765505  581861141






