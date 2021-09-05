import ProductCardProps from "../../types/ProductCardProps"
import * as Styled from './styles'
import { IoMdHeartEmpty } from 'react-icons/io'

const ProductCard = ({
    title,
    style,
    animationOnHover,
    children,
    size,
    imgUrl,
    description,
    price,
    priceOnCard,
    visitProduct,
    favoriteProduct
}: ProductCardProps) => {
    return (
        <Styled.Container
            style={{
                background: style?.background,
                borderRadius: style?.borderRadius
            }}
            animationOnHover={animationOnHover}
            size={size}
            onClick={visitProduct}
        >
            <Styled.FavoriteButton>
                <IoMdHeartEmpty size={24} onClick={favoriteProduct} />
            </Styled.FavoriteButton>
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