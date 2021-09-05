import { ReactNode } from "react"

type ProductCardProps = {
    title?: string;
    description? :string;
    imgUrl?: string;
    price?: string;
    priceOnCard?: string;
    children?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    style?: {
        background?: string;
        borderRadius?: string;
    }
    animationOnHover?: boolean;
    favoriteProduct?:  () => void;
    visitProduct?: () => void;
}

export default ProductCardProps