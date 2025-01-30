import Content from '@/app/news/Content';
import React, { Suspense, useEffect } from 'react';
import config from "@/config";
export default async function Page({ params }: { params: { id: string } }) {
    console.log(params, 'pp1');

    const news = await fetch(`${config.host}/api/getNewsId/${params.id}`, { method: "GET"});
    // const res = await news.json();

    return (
        <div>12333
            id:{params.id}
        </div>
    )
}
