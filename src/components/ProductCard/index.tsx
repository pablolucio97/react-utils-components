import ProductCardProps from "../../types/ProductCardProps"
import * as Styled from './styles'

const ProductCard = ({
    title,
    style,
    animationOnHover,
    children,
    size,
    imgUrl,
    description,
    price,
    priceOnCard
}: ProductCardProps) => {
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
            <Styled.TitleContainer>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Description>{description}</Styled.Description>
            </Styled.TitleContainer>
            <Styled.PriceContainer>
                <Styled.Price>{price}</Styled.Price>
                <Styled.CardPrice>{priceOnCard}</Styled.CardPrice>
            </Styled.PriceContainer>
            {children}
        </Styled.Container>
    )
}

export { ProductCard }