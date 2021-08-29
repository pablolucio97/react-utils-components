import {
    Container,
    Col,
    FooterTitle,
    FooterLink,
    ExtraDataContainer,
    ColumnsContainer,
    ExtraDataText
} from './styles'

import FooterProps from '../../types/FooterProps'

const Footer = ({
    link1Col2,
    link1Col3,
    link1Col5,
    link2Col2,
    link2Col1,
    link3Col1,
    link3Col2,
    link1Col1,
    link1Col4,
    link2Col3,
    link2Col4,
    link2Col5,
    link3Col3,
    link3Col4,
    link3Col5,
    link4Col1,
    link4Col2,
    link4Col3,
    link4Col4,
    link4Col5,
    link5Col1,
    link5Col2,
    link5Col3,
    link5Col4,
    link5Col5,
    text1Col1,
    text1Col2,
    text1Col3,
    text1Col4,
    text1Col5,
    text2Col1,
    text2Col2,
    text2Col3,
    text2Col4,
    text2Col5,
    text3Col1,
    text3Col2,
    text3Col3,
    text3Col4,
    text3Col5,
    text4Col1,
    text4Col2,
    text4Col3,
    text4Col4,
    text4Col5,
    text5Col1,
    text5Col2,
    text5Col3,
    text5Col4,
    text5Col5,
    titleCol1,
    titleCol2,
    titleCol3,
    titleCol4,
    titleCol5,
    extraDataText,
    showExtraData
}: FooterProps) => {
    return (
        <Container>
            <ColumnsContainer>
                <Col>
                    <FooterTitle>{titleCol1}</FooterTitle>
                    <FooterLink href={link1Col1}>{text1Col1}</FooterLink>
                    <FooterLink href={link2Col1}>{text2Col1}</FooterLink>
                    <FooterLink href={link3Col1}>{text3Col1}</FooterLink>
                    <FooterLink href={link4Col1}>{text4Col1}</FooterLink>
                    <FooterLink href={link5Col1}>{text5Col1}</FooterLink>
                </Col>
                <Col>
                    <FooterTitle>{titleCol2}</FooterTitle>
                    <FooterLink href={link1Col2}>{text1Col2}</FooterLink>
                    <FooterLink href={link2Col2}>{text2Col2}</FooterLink>
                    <FooterLink href={link3Col2}>{text3Col2}</FooterLink>
                    <FooterLink href={link4Col2}>{text4Col2}</FooterLink>
                    <FooterLink href={link5Col2}>{text5Col2}</FooterLink>
                </Col>
                <Col>
                    <FooterTitle>{titleCol3}</FooterTitle>
                    <FooterLink href={link1Col3}>{text1Col3}</FooterLink>
                    <FooterLink href={link2Col3}>{text2Col3}</FooterLink>
                    <FooterLink href={link3Col3}>{text3Col3}</FooterLink>
                    <FooterLink href={link4Col3}>{text4Col3}</FooterLink>
                    <FooterLink href={link5Col3}>{text5Col3}</FooterLink>
                </Col>
                <Col>
                    <FooterTitle>{titleCol4}</FooterTitle>
                    <FooterLink href={link1Col4}>{text1Col4}</FooterLink>
                    <FooterLink href={link2Col4}>{text2Col4}</FooterLink>
                    <FooterLink href={link3Col4}>{text3Col4}</FooterLink>
                    <FooterLink href={link4Col4}>{text4Col4}</FooterLink>
                    <FooterLink href={link5Col4}>{text5Col4}</FooterLink>
                </Col>
                <Col>
                    <FooterTitle>{titleCol5}</FooterTitle>
                    <FooterLink href={link1Col5}>{text1Col5}</FooterLink>
                    <FooterLink href={link2Col5}>{text2Col5}</FooterLink>
                    <FooterLink href={link3Col5}>{text3Col5}</FooterLink>
                    <FooterLink href={link4Col5}>{text4Col5}</FooterLink>
                    <FooterLink href={link5Col5}>{text5Col5}</FooterLink>
                </Col></ColumnsContainer>
            <ExtraDataContainer showExtraData={showExtraData}>
                <ExtraDataText>
                    {extraDataText}

                </ExtraDataText>
            </ExtraDataContainer>
        </Container>
    )
}

export { Footer }