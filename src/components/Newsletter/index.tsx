import NewsletterProps from '../../types/NewsletterProps'
import {
    Container,
    TextInput,
    InfoContainer,
    ActionContainer,
    Title,
    Text,
    Button
} from './styles'

const Newsletter = ({
    buttonStyle,
    style,
    inputStyle,
    textInfo,
    title,
    buttonlabel,
    placeholder,
    showFocusEffect
}: NewsletterProps) => {
    return (
        <Container
            style={style}
        >
            <InfoContainer>
                <Title>{title}</Title>
                <Text>{textInfo}</Text>
            </InfoContainer>
            <ActionContainer>
                <TextInput
                    inputStyle={inputStyle}
                    placeholder={placeholder}
                    showFocusEffect={showFocusEffect}
                />
                <Button
                    buttonStyle={buttonStyle}
                >
                    {buttonlabel}
                </Button>
            </ActionContainer>
        </Container>
    )
}

export { Newsletter }