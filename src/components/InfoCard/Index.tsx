import InfoCardProps from "../../types/InfoCardProps"
import {
    Container,
    Content,
    SubTitle,
    Title,
    ContentContainer,
    TitleContainer
} from './styles'

const InfoCard = ({ title, content, subtitle, style, animationOnHover, children }: InfoCardProps) => {
    return (
        <Container
            style={{
                background:style?.background,
                borderRadius: style?.borderRadius
            }}
            animationOnHover={animationOnHover}
        >
            <TitleContainer>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
            </TitleContainer>
            <ContentContainer>
                <Content>{content}</Content>
            </ContentContainer>
            {children}
        </Container>
    )
}

export { InfoCard }