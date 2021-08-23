import { createContext, useState, ReactNode } from 'react'

import { DialogStateProps } from '../types/DialogProps'

type ChildrenProps = {
    children: ReactNode;
}

export const ModalContext = createContext({} as DialogStateProps)

export const ModalContextProvider = ({ children } : ChildrenProps) => {

    const [dialogOpened, setDialogOpened] = useState<boolean>(true)

    return (
        <ModalContext.Provider value={{ dialogOpened, setDialogOpened }}>
            {children}
        </ModalContext.Provider>
    )
}