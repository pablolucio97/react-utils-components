import { Container, ImageContainer, Img } from "./styles"
import CarouselImageProps from '../../types/CarouselImageProps'

export const CarouselImage = ({
    img1Url,
    img2Url,
    img3Url,
    img4Url,
    img5Url
}: CarouselImageProps) => {
    return (
        <Container>
            <ImageContainer>
                <Img src={img1Url} />
                <Img src={img2Url} />
                <Img src={img3Url} />
                <Img src={img4Url} />
                <Img src={img5Url} />
            </ImageContainer>
        </Container>
    )
}