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
  titleCol1,
  titleCol2,
  titleCol3,
  titleCol4,
  titleCol5,
  contentCol1,
  contentCol2,
  contentCol3,
  contentCol4,
  contentCol5,
  extraDataText,
  showExtraData
}: FooterProps) => {
  return (
    <Container>
      <ColumnsContainer>
        {titleCol1 && <Col>
          <FooterTitle>{titleCol1}</FooterTitle>
          {contentCol1.content.map(item => (
            <>
              <FooterLink href={item.url}>{item.text}</FooterLink>
            </>
          ))}
        </Col>}
        {titleCol2 && <Col>
          <FooterTitle>{titleCol2}</FooterTitle>
          {contentCol2.content.map(item => (
            <>
              <FooterLink href={item.url}>{item.text}</FooterLink>
            </>
          ))}
        </Col>}
        {titleCol3 && <Col>
          <FooterTitle>{titleCol3}</FooterTitle>
          {contentCol3.content.map(item => (
            <>
              <FooterLink href={item.url}>{item.text}</FooterLink>
            </>
          ))}
        </Col>}
        {titleCol4 && <Col>
          <FooterTitle>{titleCol4}</FooterTitle>
          {contentCol4.content.map(item => (
            <>
              <FooterLink href={item.url}>{item.text}</FooterLink>
            </>
          ))}
        </Col>}
        {titleCol5 && <Col>
          <FooterTitle>{titleCol5}</FooterTitle>
          {contentCol5.content.map(item => (
            <>
              <FooterLink href={item.url}>{item.text}</FooterLink>
            </>
          ))}
        </Col>}

      </ColumnsContainer>
      <ExtraDataContainer showExtraData={showExtraData}>
        <ExtraDataText>
          {extraDataText}
        </ExtraDataText>
      </ExtraDataContainer>
    </Container>
  )
}

export { Footer }