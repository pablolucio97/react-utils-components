import ReadBarProgressProps from '../../types/ReadBarProgressProps'


import { Container, Progress } from './styles';


const ReadBarProgress = ({
    barType,
    background,
    gradientBackground,
    gradientEndColor,
    gradientStartColor
}: ReadBarProgressProps) => {
    
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
    );
}

export { ReadBarProgress };

