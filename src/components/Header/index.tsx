import HeaderProps from '../../types/HeaderProps'
import { Container, Link, Logo, Progress, ReadBarContainer, SearchBar, SearchBarContainer, Title, TitleContainer } from './styles'

const Header = ({
    title,
    headerSize,
    logoSize,
    logoUrl,
    showReadbar,
    showSearchBar,
    readBarType,
    readBarbackground,
    readBargradientBackground,
    readBargradientEndColor,
    readBargradientStartColor,
    headerBackground,
    displayElements
}: HeaderProps) => {
    return (
        <Container
            headerSize={headerSize}
            headerBackground={headerBackground}
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
            <ReadBarContainer
                showReadbar={showReadbar}
                readBarType={readBarType}
            >
                <Progress
                    readBarbackground={readBarbackground}
                    readBargradientBackground={readBargradientBackground}
                    readBargradientEndColor={readBargradientEndColor}
                    readBargradientStartColor={readBargradientStartColor}
                />
            </ReadBarContainer>
        </Container>
    )
}

export { Header }