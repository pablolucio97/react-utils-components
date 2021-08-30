import { createContext, ReactNode } from 'react'
import SectionProps from '../types/SectionProps'

export const SectionAndMenuContext = createContext({} as SectionProps)

type ChildrenProps = {
    children: ReactNode;
}


export const SectionAndMenuContextProvider = ({ children }: ChildrenProps) => {

    const firstMenuId = '#1'
    const secondMenuId = '#2'
    const thirdMenuId = '#3'
    const fourthMenuId = '#4'
    const fivethMenuId = '#5'
    const sixthMenuId = '#6'
    const seventhMenuId = '#7'
    const eighthMenuId = '#8'
    const ninethMenuId = '#9'
    const tenthMenuId = '#10'
    const eleventhMenuId = '#11'
    const twelfthMenuId = '#12'
    
    return (
        <SectionAndMenuContext.Provider value={{
            firstMenuId,
            secondMenuId,
            thirdMenuId,
            fourthMenuId,
            fivethMenuId,
            sixthMenuId,
            seventhMenuId,
            eighthMenuId,
            ninethMenuId,
            tenthMenuId,
            eleventhMenuId,
            twelfthMenuId
 }}>
            {children}
        </SectionAndMenuContext.Provider>
    )
}