import * as Styled from "./styles"
import CarouselImageProps from '../../types/CarouselImageProps'

export const CarouselImage = ({
    img1Url,
    img2Url,
    img3Url,
    img4Url,
    img5Url
}: CarouselImageProps) => {
    return (
        <Styled.Container>
            <Styled.ImageContainer>
                <Styled.Img src={img1Url} />
                <Styled.Img src={img2Url} />
                <Styled.Img src={img3Url} />
                <Styled.Img src={img4Url} />
                <Styled.Img src={img5Url} />
            </Styled.ImageContainer>
        </Styled.Container>
    )
}