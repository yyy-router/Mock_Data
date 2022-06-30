##### 使用json-server+mockjs实现前端接口数据模拟

> 项目根目录下初始化项目
>
> ```
> npm init -y
> ```
>
> 安装json-server
>
> ```
> npm i json-server
> ```
>
> 安装完毕后启动项目
>
> ```
> 控制台输入如下命令：
> json-server --watch --port 3000 --host 127.0.0.1 db.json
> watch表示开始监听，port表示监听端口号（如有冲突可以更换端口号），host表示主机名（默认是本地主机），db.json是模拟数据。
> ```
>
> 命令执行后会在项目目录下生成db.json文件，可以随意更改里面的模拟数据（注意JSON格式）
>
> 此时在控制台便生成接口链接，可以直接访问数据。

> 配合[Mock.js (mockjs.com)](http://mockjs.com/examples.html)使用
>
> ```
> mockjs是一个用来随机生成前端中文数据的，详情请参考官网
> ```
>
> 安装mockjs
>
> ```
> npm i mockjs
> ```
>
> 在项目中新建一个js文件
>
> ```
> db.js
> ```
>
> 在db.js文件中初始化mock，并设置模拟数据类型
>
> ```js
> const Mock = require('mockjs');
> const Random = Mock.Random;
> module.exports = ()=>{
>     let data = { 
>         news: [],
>     };
>     for(let i = 0;i < 20;i ++){
>         data.news.push({
>             id:i,
>             // 这里的相关数据可以根据mockjs官网进行配置
>             content:Random.cparagraph(1),
>             address:Random.county(true),
>         })
>     }
>      return data;
> }
> ```
>
> 结合json-server启动服务
>
> ```
> json-server --watch --port 3000 --host 127.0.0.1 db.js
> //这里就是把后面的模拟数据文件由原来的db.json变成db.js
> ```

```
tips：json-server可以进行增删改查等一系列接口操作，可以配合postman测试，详情请看官网。
```



