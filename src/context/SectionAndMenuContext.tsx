import { createContext, ReactNode } from 'react'
import SectionProps from '../types/SectionProps'

export const SectionAndMenuContext = createContext({} as SectionProps)

type ChildrenProps = {
    children: ReactNode;
}


export const SectionAndMenuContextProvider = ({ children }: ChildrenProps) => {

    const menuId = '#1'
   
    return (
        <SectionAndMenuContext.Provider value={{
            menuId
 }}>
            {children}
        </SectionAndMenuContext.Provider>
    )
}