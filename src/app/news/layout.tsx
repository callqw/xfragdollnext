'use client'
import { Context } from '@/components/Context/provider'
import React, { useContext, useEffect } from 'react'
export default function PageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            {children}
        </div>
    )
}
