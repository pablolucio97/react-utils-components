import NewsletterProps from '../../types/NewsletterProps'
import * as Styled from './styles'

const Newsletter = ({
    buttonStyle,
    style,
    inputStyle,
    textInfo,
    title,
    buttonlabel,
    placeholder,
    showFocusEffect,
    alignContent
}: NewsletterProps) => {
    return (
        <Styled.Container
            style={style}
        >
            <Styled.InfoContainer alignContent={alignContent}>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Text>{textInfo}</Styled.Text>
            </Styled.InfoContainer>
            <Styled.ActionContainer alignContent={alignContent}>
                <Styled.TextInput
                    inputStyle={inputStyle}
                    placeholder={placeholder}
                    showFocusEffect={showFocusEffect}
                />
                <Styled.Button
                    buttonStyle={buttonStyle}
                >
                    {buttonlabel}
                </Styled.Button>
            </Styled.ActionContainer>
        </Styled.Container>
    )
}

export { Newsletter }