import FormProps from '../../types/FormProps';
import * as Styled from './styles';

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
        <Styled.Container onSubmit={postFunction}>
            <Styled.TitleContainer>
                <Styled.Title>{formTitle}</Styled.Title>
            </Styled.TitleContainer>
            <Styled.InputContainer>
                <Styled.Label>{nameLabel}</Styled.Label>
                <Styled.TextInput
                    placeholder={namePlaceholder}
                    required
                    type='text'
                />
            </Styled.InputContainer>
            <Styled.InputContainer>
                <Styled.Label>{emailLabel}</Styled.Label>
                <Styled.TextInput
                    placeholder={emailPlaceholder}
                    required
                    type='email'
                />
            </Styled.InputContainer>
            <Styled.InputContainer>
                <Styled.Label>{passwordLabel}</Styled.Label>
                <Styled.TextInput
                    placeholder={passwordPlaceholder}
                    required
                    type='password'
                />
            </Styled.InputContainer>
            <Styled.PostButton type='submit' buttonStyle={buttonStyle}>Register</Styled.PostButton>
        </Styled.Container>
    )
        ;
}

export default Form;