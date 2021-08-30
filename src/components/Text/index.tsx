import { TextElement } from './styles'
import TextProps from '../../types/TextProps'

const Text = ({ text }: TextProps) => {
    return (
        <TextElement>{text}</TextElement>
    )
}

export { Text }