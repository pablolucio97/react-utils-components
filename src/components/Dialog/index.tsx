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


const Dialog = ({ content, title }: DialogProps) => {
    return (
        <Container>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <ButtonClose><MdClose size={24} /></ButtonClose>
            <ContentContainer>
                <Content>{content}</Content>
            </ContentContainer>
            <ActionsContainer>
                <ConfirmButton>OK</ConfirmButton>
                <CancelButton>Cancelar</CancelButton>
            </ActionsContainer>
        </Container>
    )
}

export { Dialog }