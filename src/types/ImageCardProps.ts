import {ReactNode} from 'react'

type ImageCardProps = {
    title?: string;
    content?: string;
    size?: 'small' | 'medium' | 'large';
    style?: {
        background?: string;
        borderRadius?: string;
    }
    animationOnHover?: boolean;
    imgUrl?: string;
    children?: ReactNode;
}

export default ImageCardProps