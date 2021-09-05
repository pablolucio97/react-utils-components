type ButtonProps = {
    label?: string;
    style?: {
        background?: string;
        borderRadius: string;
    }
    showPressedEffect?: boolean;
    buttonStyle?: 'solid' | 'outline';
    action?: () => void;
    children?: React.ReactNode;
    disabled?: boolean;

}

export default ButtonProps