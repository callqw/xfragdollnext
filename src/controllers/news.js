/**
 * Created by xj on 2019/3/24.
 */
const fs = require("mz").fs;
const path = require("path");
const moment = require("moment");
var CircularJSON = require("circular-json");
const news = require("@/modules/news");
const Link = require("../modules/link");
const { NextResponse } = require("next/server");
let script = require("@/controllers/publicStore");
var newsHtml = async function (ctx, next) {
  var dateVal = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
  var page = {}
  page.page = 1
  if (
    JSON.stringify(page) == "{}" ||
    page.page == "0" 
  ) {
    page.page = 1;
  }
  var res = await news.SelectAllNews(page);
return new Promise((resolve, reject) => {
    if (res.data[0] != undefined) {
        res = res.data;
        let data = {
            seo: {
                title: '最新动态-幸福布偶猫舍',
                keywords: '最新发布|布偶猫最新发布',
                description: '幸福布偶猫舍最新发布。。。',
                author: '幸福布偶猫舍'
            },
            date: {
                val: dateVal
            },
            script:script.script(),
            // login: ctx.cookies.get('login'),
            data: res,
            // link:await Link.linkSelect(ctx)
        }
        resolve(data);
  
    } else {
        resolve({data:"404"},{status:404})
    }
})

};
module.exports = {
  newsHtml: newsHtml,
};
