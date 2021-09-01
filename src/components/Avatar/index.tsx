import AvatarProps from "../../types/AvatarProps"
import * as Styled from './styles'

const Avatar = ({
    size,
    urlImg,
    borderColor,
    borderType
}: AvatarProps) => {
    return (
        <Styled.Container size={size} borderColor={borderColor}  borderType={borderType}>
            <Styled.Img
                src={urlImg}
            />
        </Styled.Container>
    )
}

export { Avatar }