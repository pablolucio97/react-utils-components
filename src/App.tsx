import { GlobalStyles } from './styles/Globals'
import { InfoCard } from './components/InfoCard'
import { ReadBarProgress } from './components/ReadBarProgress'
import { Dialog } from './components/Dialog'
import { ModalContextProvider } from './context/ModalContext'
import { PrimaryButton } from './components/PrimaryButton'
import CollapsibleContainer from './components/CollapsibleContainer'
import { SecondaryButton } from './components/SecondaryButton'
import Input from './components/Input'
import Form from './components/Form'
import { FormEvent } from 'react'

//do progressbarread works
//create functionalities to dialog -- fix dialog context


const App = () => {

    function test(e: FormEvent){
        e.preventDefault()
        console.log('ok')
    }

    return (
        <ModalContextProvider>
            <GlobalStyles />
            <ReadBarProgress
                background='red'
                barType='thin'
                gradientBackground
                gradientStartColor='yellow'
                gradientEndColor='red'
            />
            <InfoCard
                title='Title'
                subtitle='Subtitle'
                content='Card content'
                children={PrimaryButton}
            />
            <Dialog
                title='Dialog'
                content='Are you sure for delete this item from your cart?'
            />
            <PrimaryButton
                label='click'
                showPressedEffect
                buttonStyle='solid'
            />
            <SecondaryButton
                label='click'
                showPressedEffect
                buttonStyle='outlined'
            />
            <CollapsibleContainer
                title='How much it costs?'
                content='It is free for 3 months and you will paid after this period.'
            />
            <Input
                label='Password'
                placeholder='Type your password'
                style={{
                    borderColor: 'red',
                    borderRadius: '0px'
                }}
            />
            <Form
                formTitle='New register'
                nameLabel='Name'
                emailLabel='Email'
                passwordLabel='Password'
                namePlaceholder='Type for name'
                emailPlaceholder='Type for email'
                passwordPlaceholder='Type for password'
                buttonStyle='outlined'
                postFunction={test}
            />
        </ModalContextProvider>
    )
}

export default App