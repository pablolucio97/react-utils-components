import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SectionAndMenuContextProvider } from './context/SectionAndMenuContext'
import { DialogContextProvider } from './context/DialogContext'
import {ThemeProvider} from 'styled-components'
import {theme} from './styles/theme'

ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
      <SectionAndMenuContextProvider>
            <DialogContextProvider>
                <App />
            </DialogContextProvider>
        </SectionAndMenuContextProvider>
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

