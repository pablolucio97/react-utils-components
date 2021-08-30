import HeaderProps from '../../types/HeaderProps'
import { Container, Link, Logo, SearchBar, SearchBarContainer, Title, TitleContainer } from './styles'

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
        <Container
            size={size}
            background={background}
            displayElements={displayElements}
        >
            <TitleContainer>
                <Link>
                    <Logo
                        logoSize={logoSize}
                        src={logoUrl}
                    />
                </Link>
                <Title>{title}</Title>
            </TitleContainer>
            <SearchBarContainer>
                <SearchBar
                    showSearchBar={showSearchBar}
                    placeholder='Search'
                />
            </SearchBarContainer>
        </Container>
    )
}

export { Header }