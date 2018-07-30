# lieqidao

> 这是猎奇岛前端项目页面的基本信息以及目录结构（这是写给我那萌蠢萌蠢的女友，反正她也看不到 ╮(╯▽╰)╭）
[猎奇岛](http://www.lieqidao.club)

## 技术栈

vue2 + vuex + vue-router + axios + webpack + es6 + sass

## 页面框架

element-ui

## 说明
此项目仅仅是前端页面项目，需要配合后端项目运行
本地运行 cnpm run dev
打包 cnpm build

## 目录结构
```
.
├── build               // webpack配置文件
├── config              // 项目打包路径
├── src                 // 源码路径
│   ├── assets          // 静态资源
│   │   ├── css
│   │   ├── image
│   ├── components      // 公共组件
│   │   ├── dialog
│   │   ├── header
│   │   ├── title
│   ├── page            // 主要组件
│   │   ├── footer
│   │   ├── home
│   │   ├── login
│   ├── router          // 路由配置文件
│   ├── store           // vuex 配置文件
│   ├── utils           // js文件
│   ├── app.vue         // 页面入口文件
│   ├── main.js         // 程序入口文件，加载各种公共组件
├── static
├── idnex.html          // 入口html文件
.
```