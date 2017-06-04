# 响应式个人简介
===============================

## 简介
响应式个人简介是通过Bootstrap、jQuery框架建立的个人简介网站，通过这个网站的开发，熟悉Bootstrap构建响应式网页的技术。并且网页中实战项目的展示部分是通过AJAX获取JSON数据动态加载的。

## 如何执行

安装NodeJS服务器，并使用'http-server'运行该项目，方法如下：

首先，确保安装了全局的'npm'
参照[文章](https://www.digitalocation.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps) 安装npm或者打开[Node.js 官网](https://github.com/creationix/nvm)

其次，安装全局的'http-server'服务
```bash
npm install -g http-server
cd 100du #确保在项目根目录下运行
http-server -c-1 -o # -c-1 禁用缓存 -o 服务器打开后立即打开浏览器运行项目
```
由于此项目运用了AJAX获取数据，因此必须在服务器中运行才可以正确执行。


