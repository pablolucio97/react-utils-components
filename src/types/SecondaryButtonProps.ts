type SecondaryButtonProps = {
    label: string;
    style?: {
        background?: string;
        borderRadius: string;
    }
    showPressedEffect?: boolean;
    buttonStyle?: 'solid' | 'outline'
    action?: () => void;

}

export default SecondaryButtonProps
