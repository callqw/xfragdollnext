"use client"
import React, { memo, ReactNode, useMemo } from 'react'
import { Col, Row, Image } from 'antd';
import "./index.scss";
import Images from 'next/image';
import Link from 'next/link';
import { Context, getContext } from '@/components/Context/provider';
import Container from '@/components/Container';

interface ClientProps {
    children: ReactNode,
    news: NEWS.NewsProps
}
const Client: React.FC<ClientProps> = function ({ news }: ClientProps) {
    const News = useMemo(() => {
        return (
            <div className='newsStyle'>
                <Container >
                    {
                        news.data.map((item: BASIC.Data, index: number) => {
                            return <div key={index}>
                                <Row>
                                    <Col className='newsStyleTitle' md={24} xs={24} >
                                    <Link href={`/news/${item.id}`}>{item.title}</Link>
                                        
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='newsStyleDescription' md={24} xs={24} >
                                        {item.description}
                                    </Col>
                                </Row>
                                {/* 图片list start*/}
                                <Row>
                                    {
                                        item.imgList?.map((itemList:BASIC.ImgList, indexList:number) => {
                                            return <Col key={indexList}  md={6} xs={12}>
                                                    <div className='newsStyleDiv'>
                                                        <Images width={400} height={400} src={itemList.url} alt="介绍" />
                                                    </div>
                                                </Col>
                                        })
                                    }
                                </Row>
                                {/* 图片list end*/}

                            </div>
                        })
                    }
                </Container>

            </div>
        )
    }, [])
    return (
        <div>
            {News}
        </div>
    )
}
export default memo(Client)