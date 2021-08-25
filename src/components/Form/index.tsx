import FormProps from '../../types/FormProps';
import {
    TextInput,
    InputContainer,
    Label,
    Container,
    Title,
    TitleContainer,
    PostButton
} from './styles';

const Form = ({
    postFunction,
    nameLabel,
    buttonStyle,
    namePlaceholder,
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
    formTitle
}: FormProps) => {
    return (
        <Container onSubmit={postFunction}>
            <TitleContainer>
                <Title>{formTitle}</Title>
            </TitleContainer>
            <InputContainer>
                <Label>{nameLabel}</Label>
                <TextInput
                    placeholder={namePlaceholder}
                />
            </InputContainer>
            <InputContainer>
                <Label>{emailLabel}</Label>
                <TextInput
                    placeholder={emailPlaceholder}
                />
            </InputContainer>
            <InputContainer>
                <Label>{passwordLabel}</Label>
                <TextInput
                    placeholder={passwordPlaceholder}
                />
            </InputContainer>
            <PostButton type='submit' buttonStyle={buttonStyle}>Register</PostButton>
        </Container>
    )
        ;
}

export default Form;