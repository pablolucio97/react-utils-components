import UserCardProps from "../../types/UserCardProps"
import * as Styled from './styles'

const UserCard = ({
    title,
    content,
    subtitle,
    style,
    animationOnHover,
    children,
    size,
    imgSize,
    imgUrl
}: UserCardProps) => {
    return (
        <Styled.Container
            style={{
                background: style?.background,
                borderRadius: style?.borderRadius
            }}
            animationOnHover={animationOnHover}
            size={size}
        >
            <Styled.ImgContainer imgSize={imgSize}>
                <Styled.Img src={imgUrl} />
            </Styled.ImgContainer>
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

export { UserCard }