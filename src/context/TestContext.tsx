import { Dispatch } from 'react'
import { SetStateAction } from 'react'
import { createContext, useState, ReactNode } from 'react'

type testProps = {
    currentText: string;
    setTestString?: Dispatch<SetStateAction<string>>;
}


type childrenProps = {
    children: ReactNode;
}

export const TestContext = createContext({} as testProps)

export const TestContextProvider = ({ children }: childrenProps) => {

    const [currentText, setTestString] = useState<string>('sdfsdf')

    return (
        <TestContext.Provider value={{currentText, setTestString}} >
            {children}
        </TestContext.Provider>
    )
}