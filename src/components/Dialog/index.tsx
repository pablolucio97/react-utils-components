import DialogProps from '../../types/DialogProps'
import {
    Container,
    Title,
    TitleContainer,
    Content,
    ButtonClose,
    CancelButton,
    ConfirmButton,
    ActionsContainer,
    ContentContainer
} from './styles'
import { MdClose } from 'react-icons/md'

import { ModalContextProvider } from '../../context/ModalContext'
import { useState } from 'react'


const Dialog = ({ content, title }: DialogProps) => {

    const [isOpenedDialog, setIsOpenedDialog] = useState(false)

    function closeDialog() {
        setIsOpenedDialog(false)
        console.log('closed dialog')
        console.log(isOpenedDialog)
    }

    function openDialog() {
        setIsOpenedDialog(true)
        console.log('opend dialog')
        console.log(isOpenedDialog)
    }



    return (
        <ModalContextProvider>
            <Container className={
                isOpenedDialog? '' : 'hideDialog'
            }>
                <TitleContainer>
                    <Title>{title}</Title>
                </TitleContainer>
                <ButtonClose onClick={closeDialog}>
                    <MdClose size={24} />
                </ButtonClose>
                <ContentContainer>
                    <Content>{content}</Content>
                </ContentContainer>
                <ActionsContainer>
                    <ConfirmButton onClick={openDialog}>OK</ConfirmButton>
                    <CancelButton onClick={closeDialog}>Cancelar</CancelButton>
                </ActionsContainer>
            </Container>
        </ModalContextProvider>
    )
}

export { Dialog }