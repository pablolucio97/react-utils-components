import InfoCardProps from "../../types/InfoCardProps"
import * as Styled from './styles'

const InfoCard = ({ title, content, subtitle, style, animationOnHover, children, size }: InfoCardProps) => {
    return (
        <Styled.Container
            style={{
                background:style?.background,
                borderRadius: style?.borderRadius
            }}
            animationOnHover={animationOnHover}
            size={size}
        >
            <Styled.TitleContainer>
                <Styled.Title>{title}</Styled.Title>
                <Styled.SubTitle>{subtitle}</Styled.SubTitle>
            </Styled.TitleContainer>
            <Styled.ContentContainer>
                <Styled.Content>{content}</Styled.Content>
            </Styled.ContentContainer>
            {children}
        </Styled.Container>
    )
}

export { InfoCard }