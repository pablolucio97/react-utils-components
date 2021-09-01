import SectionProps from '../../types/SectionProps'
import * as Styled from './styles'

export default function Section({
    menuId,
    title,
    sectionStyle,
    children,
    contentOrientation
}: SectionProps) {
    return (
        <Styled.SectionContainer
            id={menuId}
            sectionStyle={sectionStyle}

        >
            <Styled.TitleContainer>
                <Styled.Title>
                    {title}
                </Styled.Title>
            </Styled.TitleContainer>
            <Styled.ContentContainer
                contentOrientation={contentOrientation}
            >
                {children}
            </Styled.ContentContainer>
        </Styled.SectionContainer>
    )
}

export { Section }
