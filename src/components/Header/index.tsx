import HeaderProps from '../../types/HeaderProps'
import * as Styled from './styles'

const Header = ({
    title,
    size,
    logoSize,
    logoUrl,
    showSearchBar,
    background,
    displayElements
}: HeaderProps) => {
    return (
        <Styled.Container
            size={size}
            background={background}
            displayElements={displayElements}
        >
            <Styled.TitleContainer>
                <Styled.Link>
                    <Styled.Logo
                        logoSize={logoSize}
                        src={logoUrl}
                    />
                </Styled.Link>
                <Styled.Title>{title}</Styled.Title>
            </Styled.TitleContainer>
            <Styled.SearchBarContainer>
                <Styled.SearchBar
                    showSearchBar={showSearchBar}
                    placeholder='Search'
                />
            </Styled.SearchBarContainer>
        </Styled.Container>
    )
}

export { Header }