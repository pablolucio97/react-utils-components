
import InputProps from '../../types/InputProps';
import { TextInput, Container, Label } from './styles';

const Input = ({label, placeholder} : InputProps) => {
    return (
        <Container>
            <Label>{label}</Label>
            <TextInput
            placeholder={placeholder}
            />
        </Container>
    )
        ;
}

export default Input;