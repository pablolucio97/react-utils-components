
import InputProps from '../../types/InputProps';
import * as Styled from './styles';

const Input = ({label, placeholder, style} : InputProps) => {
    return (
        <Styled.Container>
            <Styled.Label>{label}</Styled.Label>
            <Styled.TextInput
            placeholder={placeholder}
            style={style}
            />
        </Styled.Container>
    )
        ;
}

export default Input;