import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SectionAndMenuContextProvider } from './context/SectionAndMenuContext'
import { DialogContextProvider } from './context/DialogContext'

ReactDOM.render(
    <React.StrictMode>
        <SectionAndMenuContextProvider>
            <DialogContextProvider>
                <App />
            </DialogContextProvider>
        </SectionAndMenuContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

