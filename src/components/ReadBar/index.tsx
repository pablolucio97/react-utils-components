import ReadBarProps from '../../types/ReadBarProps'
import {Progress, Container} from './styles'

const ReadBar = ({
    barType,
    background,
    gradientBackground,
    gradientEndColor,
    gradientStartColor

 } : ReadBarProps) => {
    return (
        <Container
                barType={barType}
            >
                <Progress
                    background={background}
                    gradientBackground={gradientBackground}
                    gradientEndColor={gradientEndColor}
                    gradientStartColor={gradientStartColor}
                />
        </Container>
    )
}

export {ReadBar}