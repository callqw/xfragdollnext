const fs = require('mz').fs;
const path = require('path');
var CircularJSON = require('circular-json');
const unicode = require('./unicodeRes')
const moment = require('moment');
const NewsTemplate = require('../modules/news');
const Link =  require('../modules/link');

var newsTemplate = async function (ctx) {
 
    
    let script = require('./publicStore');
    script = script.script();

    var dateVal = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    var searchVal = ctx.params;
    console.log(ctx,'cccc');
    searchVal.type = 'news';
  
    var res = await NewsTemplate.selectNewsTemplate(searchVal);
    if (res.status ==200) {
        res = res.data[0];
        let data = {
            seo: {
                title: res.title+'-幸福布偶猫舍',
                keywords: res.keywords,
                description: res.description,
                author: res.author
            },
            date: {
                val: dateVal
            },
            script:script,
            login:ctx.cookies.get('login'),
            data: res,
            link:await Link.linkSelect(ctx)
        }
        switch (ctx.header.wx){
            case 'wx':
                ctx.body = data;
                break
            default:
                await ctx.render('newsTemplate', data);
        }

    } else {
        let data = {
            seo: {
                title: '404-幸福布偶猫舍',
                keywords: '404',
                description: '404',
                author: '幸福布偶猫舍'
            },
            login:ctx.cookies.get('login'),
            data:res,
            date: {
                val: dateVal
            },
            link:await Link.linkSelect(ctx)
        }
        ctx.status = 404;
        await ctx.render('404', data);
    }


}
module.exports = {
    newsTemplate: newsTemplate
}