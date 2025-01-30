import React, { useContext, useEffect } from 'react';

export default async function PageLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <div>
            {children}
        </div>
    )
}
