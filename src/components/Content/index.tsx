"use client"
import React, { useEffect, useLayoutEffect, useState, Suspense, lazy } from 'react'
import { Row, Col } from 'antd';
import Image from 'next/image';
import Container from '@/components/Container';
import { getContext } from '../Context/provider';
export default function Content() {
    const { data }: any = getContext();
    const [contentData, setContentData]: any = useState(data);
    return (
        <div>
            <Suspense fallback={<div>fallback....</div>}>
                <div style={{ padding: "0 32px 0 32px" }}>
                    {contentData?.title.map((item: any, index: any) => {
                        return <>
                            <Row style={{ margin: "24px 0 24px" }}>
                                <Col md={7} xs={3}>
                                </Col>
                                <Col md={10} xs={18}>
                                    <Image src={item.url} alt={item.name} width={500} height={500} style={{ width: "auto", margin: "0 auto" }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                </Col>
                                <Col md={7} xs={3}>
                                </Col>
                            </Row>
                            <Container>
                                <Row gutter={[16, 16]} >
                                    {item.content.map((item: any, index: any) => {
                                        return (
                                            <Col key={index} md={6} xs={12}>
                                                <Image style={{ objectFit: "cover", objectPosition: "top", width: "100%", height: "100%" }} alt={item.name}
                                                    src={item.url} width={500}
                                                    height={500} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" />
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Container>
                        </>
                    })}
                </div>
            </Suspense>
        </div>


    )
}
