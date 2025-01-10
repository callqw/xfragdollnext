'use client'
import React, { useContext, useEffect, createContext, useState } from 'react';
export const Context:BASIC.AllData = createContext(null);

export default function Provider({ datas, children }: any) {

    const [data, setData]: any = useState(datas);
    const store:any = {
        data:data?.data
    }
    return (
        <div>
            <Context.Provider value={store}>{children}</Context.Provider>
        </div>
    )
}
export const getContext = function () {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useEditorContext must be used within a EditorContextProvider');
      }
    return context
}