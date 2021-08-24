import {ReactNode} from 'react'

type InfoCardProps = {
    title?: string;
    subtitle? :string;
    content?: string;
    style?: {
        background?: string;
        borderRadius?: string;
    }
    animationOnHover?: boolean;
    children?: ReactNode;
}

export default InfoCardProps