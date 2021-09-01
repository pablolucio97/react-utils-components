import DialogProps from '../../types/DialogProps'
import { useDialog } from '../../hooks/useDialogState'
import * as Styled from './styles'
import { MdClose } from 'react-icons/md'

import { DialogContextProvider } from '../../context/DialogContext'


const Dialog = ({ content, title }: DialogProps) => {

    const { dialogOpened, setDialogOpened } = useDialog()

    function closeDialog() {
        setDialogOpened(false)
    }

       return (
        <DialogContextProvider>
            <Styled.Container className={
                dialogOpened ? '' : 'activeDialog'
            }>
                <Styled.TitleContainer>
                    <Styled.Title>{title}</Styled.Title>
                </Styled.TitleContainer>
                <Styled.ButtonClose onClick={closeDialog}>
                    <MdClose size={24} />
                </Styled.ButtonClose>
                <Styled.ContentContainer>
                    <Styled.Content>{content}</Styled.Content>
                </Styled.ContentContainer>
                <Styled.ActionsContainer>
                    <Styled.ConfirmButton onClick={closeDialog}>OK</Styled.ConfirmButton>
                    <Styled.CancelButton onClick={closeDialog}>Cancelar</Styled.CancelButton>
                </Styled.ActionsContainer>
            </Styled.Container>
        </DialogContextProvider>
    )
}

export { Dialog }