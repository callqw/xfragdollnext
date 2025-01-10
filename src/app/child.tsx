"use client"
import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
export default function child({msg,children}:any) {
    useState(()=>{
        
    })
    useEffect(() => {
        console.log(msg,'iii');
        
        handFetch()
    })
    const handFetch = (async () => {
        // console.log(await fetch('/api/getData'));

    })
    return (
        <div>
            provider
            <Button onClick={handFetch} >获取接口数据</Button>
            <br />
            {children}
        </div>
    )
}
