
import InputProps from '../../types/InputProps';
import { TextInput, Container, Label } from './styles';

const Input = ({label, placeholder, style} : InputProps) => {
    return (
        <Container>
            <Label>{label}</Label>
            <TextInput
            placeholder={placeholder}
            style={style}
            />
        </Container>
    )
        ;
}

export default Input;