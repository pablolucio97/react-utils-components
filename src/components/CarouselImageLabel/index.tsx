import * as Styled from "./styles"
import CarouselImageLabelProps from '../../types/CarouselImageLabelProps'

const CarouselImageLabel = ({
    img1Url,
    img2Url,
    img3Url,
    img4Url,
    img5Url,
    img6Url,
    img7Url,
    img8Url,
    img9Url,
    img10Url,
    containerHeigh
}: CarouselImageLabelProps) => {
    return (
        <Styled.Container containerHeigh={containerHeigh}>
            <Styled.ImageContainer>
                <Styled.Ul>
                    <Styled.Li>
                        <Styled.Img src={img1Url} />
                    </Styled.Li>
                    <Styled.Li>
                        <Styled.Img src={img2Url} />
                    </Styled.Li>
                    <Styled.Li>
                        <Styled.Img src={img3Url} />
                    </Styled.Li>
                    <Styled.Li>
                        <Styled.Img src={img4Url} />
                    </Styled.Li>
                    <Styled.Li>
                        <Styled.Img src={img5Url} />
                    </Styled.Li>
                    <Styled.Li>
                        <Styled.Img src={img6Url} />
                    </Styled.Li>
                    <Styled.Li>
                        <Styled.Img src={img7Url} />
                    </Styled.Li>
                    <Styled.Li>
                        <Styled.Img src={img8Url} />
                    </Styled.Li>
                    <Styled.Li>
                        <Styled.Img src={img9Url} />
                    </Styled.Li>
                    <Styled.Li>
                        <Styled.Img src={img10Url} />
                    </Styled.Li>
                </Styled.Ul>
            </Styled.ImageContainer>
        </Styled.Container>
    )
}

export { CarouselImageLabel }