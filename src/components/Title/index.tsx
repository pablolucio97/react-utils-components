import { TitleElement } from './styles'
import TitleProps from '../../types/TitleProps'

const Title = ({ renderElement, title }: TitleProps) => {
    return (
        <TitleElement renderElement={renderElement}>{title}</TitleElement>
    )
}

export { Title }