import AvatarProps from "../../types/AvatarProps"
import { Container, Img } from './styles'

const Avatar = ({
    size,
    urlImg,
    borderColor,
    borderType
}: AvatarProps) => {
    return (
        <Container size={size} borderColor={borderColor}  borderType={borderType}>
            <Img
                src={urlImg}
            />
        </Container>
    )
}

export { Avatar }