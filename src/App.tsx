import { GlobalStyles } from './styles/Globals'
import { InfoCard } from './components/InfoCard'
import { Dialog } from './components/Dialog'
import { ModalContextProvider } from './context/ModalContext'
import { PrimaryButton } from './components/PrimaryButton'
import CollapsibleContainer from './components/CollapsibleContainer'
import { SecondaryButton } from './components/SecondaryButton'
import Input from './components/Input'
import Form from './components/Form'
import { FormEvent } from 'react'
import { Avatar } from './components/Avatar'
import { QuestionForm } from './components/QuestionForm'
import { Header } from './components/Header'
import { palletCollors } from './styles/palletCollors'

//do progressbarread works
//create functionalities to dialog -- fix dialog context
//create step indicator
//create slider image
//create footer
//create header
//create question-form


const App = () => {

    function test(e: FormEvent){
        e.preventDefault()
        console.log('ok')
    }

    return (
        <ModalContextProvider>
            <GlobalStyles />
            <Header
                logoSize='large'
                logoUrl='https://images.unsplash.com/photo-1630046213113-111c5a2772ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
                showReadbar
                readBarbackground='red'
                readBarType='thin'
                readBargradientBackground
                readBargradientEndColor={palletCollors.primary}
                readBargradientStartColor={palletCollors.secondary}
                title='React Utils Components'
                showSearchBar
                displayElements='spaced'
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
                buttonStyle='outline'
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
                buttonStyle='outline'
                postFunction={test}
            />
            <Avatar
                 urlImg='https://images.unsplash.com/photo-1629878165113-73a6276d25a6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                 size='large'
                 borderType='thin'
            />
            <QuestionForm
                question='How many is 12 + 34'
                formName='quesition1'
                idOptionA='1'
                idOptionB='2'
                idOptionC='3'
                idOptionD='4'
                optionA='12'
                optionB='12'
                optionC='12'
                optionD='12'
            />
        </ModalContextProvider>
    )
}

export default App