const Mock = require('mockjs');
const Random = Mock.Random;
module.exports = ()=>{
    let data = { 
        news: [],
    };
    for(let i = 0;i < 20;i ++){
        data.news.push({
            id:i,
            // 这里的相关数据可以根据mockjs官网进行配置
            content:Random.cparagraph(1),
            address:Random.county(true),
            ip:Random.ip(),
            email:Random.email('qq.com'),
            img:Random.image(200),
            time:Random.now('day', 'yyyy-MM-dd HH:mm:ss SS')
        })
    }
     return data;
}