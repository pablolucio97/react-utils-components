import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SectionAndMenuContextProvider } from './context/SectionAndMenuContext'

ReactDOM.render(
    <React.StrictMode>
        <SectionAndMenuContextProvider>
            <App />
        </SectionAndMenuContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

