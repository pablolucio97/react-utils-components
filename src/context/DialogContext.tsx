import { createContext, useState, ReactNode } from 'react'

import { DialogStateProps } from '../types/DialogProps'

type ChildrenProps = {
    children: ReactNode;
}

export const DialogContext = createContext({} as DialogStateProps)

export const DialogContextProvider = ({ children } : ChildrenProps) => {

    const [dialogOpened, setDialogOpened] = useState<boolean>(true)

    return (
        <DialogContext.Provider value={{ dialogOpened, setDialogOpened }}>
            {children}
        </DialogContext.Provider>
    )
}