import DialogProps from '../../types/DialogProps'
import { useDialog } from '../../hooks/useDialogState'
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

import { DialogContextProvider } from '../../context/DialogContext'


const Dialog = ({ content, title }: DialogProps) => {

    const { dialogOpened, setDialogOpened } = useDialog()

    console.log(dialogOpened)

    function closeDialog() {
        setDialogOpened(false)
    }

    function openDialog() {
        setDialogOpened(true)
    }



    return (
        <DialogContextProvider>
            <Container className={
                dialogOpened ? '' : 'activeDialog'
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
                    <ConfirmButton onClick={closeDialog}>OK</ConfirmButton>
                    <CancelButton onClick={closeDialog}>Cancelar</CancelButton>
                </ActionsContainer>
            </Container>
        </DialogContextProvider>
    )
}

export { Dialog }