
import {FormEvent} from 'react'

type FormProps = {
    formTitle?: string;
    nameLabel?: string;
    emailLabel?: string;
    passwordLabel?: string;
    namePlaceholder?: string;
    emailPlaceholder?: string;
    passwordPlaceholder?: string;
    postFunction?: (e: FormEvent) => void;
    style?: {
        borderRadius?: string;
        borderColor?: string;
        background?: string;
    }
    buttonStyle?: 'solid' | 'outline';
}

export default FormProps