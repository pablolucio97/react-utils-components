import ImageCardProps from '../../types/ImageCardProps'
import * as Styled from './styles'

const ImageCard = ({
    title,
    content,
    style,
    animationOnHover,
    children,
    size,
    imgUrl
}: ImageCardProps) => {
    return (
        <Styled.Container
            style={{
                background: style?.background,
                borderRadius: style?.borderRadius
            }}
            animationOnHover={animationOnHover}
            size={size}
        >
            <Styled.ImgContainer>
                <Styled.Img src={imgUrl} />
            </Styled.ImgContainer>
            <Styled.ContentContainer>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Content>{content}</Styled.Content>
            </Styled.ContentContainer>
            {children}
        </Styled.Container>
    )
}

export { ImageCard }