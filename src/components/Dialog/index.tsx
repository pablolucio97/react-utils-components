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

import {ModalContextProvider} from '../../context/ModalContext'


const Dialog = ({ content, title, confirmAction, cancelAction }: DialogProps) => {
    return (
      <ModalContextProvider>
            <Container>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <ButtonClose onClick={cancelAction}>
                <MdClose size={24} />
            </ButtonClose>
            <ContentContainer>
                <Content>{content}</Content>
            </ContentContainer>
            <ActionsContainer>
                <ConfirmButton onClick={confirmAction}>OK</ConfirmButton>
                <CancelButton onClick={cancelAction}>Cancelar</CancelButton>
            </ActionsContainer>
        </Container>
      </ModalContextProvider>
    )
}

export { Dialog }