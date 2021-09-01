import {ReactNode} from 'react'

type UserCardProps = {
    title?: string;
    subtitle? :string;
    content?: string;
    size?: 'small' | 'medium' | 'large';
    style?: {
        background?: string;
        borderRadius?: string;
        borderColor?: string;
        borderType?: "thick" | "thin" | "none";
    }
    animationOnHover?: boolean;
    imgSize?: 'tiny' | 'small' | 'medium' | 'large';
    imgUrl?: string;
    children?: ReactNode;
}

export default UserCardProps