import Content from '@/app/news/Content';
import React,{ Suspense, useEffect }from 'react';
import config from "@/config";
export default async function Page() {
    const news = await fetch(`${config.host}/api/getNews`,{headers:{"wx":"1"}});
    const res = await news.json();
    
    return (
        <Content news={res}>news</Content>
    )
}
