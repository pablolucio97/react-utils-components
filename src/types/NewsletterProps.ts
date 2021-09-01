type NewsletterProps = {
    title?: string | 'Newslleter';
    textInfo?: string;
    buttonlabel?: string;
    placeholder?: string;
    inputStyle?: {
        borderRadius?: string;
        borderColor?: string;
    };
    buttonStyle?: {
        background?: string;
        borderRadius?: string;
        color?: string;
    };
    style?:{
        background?: string;
        borderRadius?: string;
    };
    showFocusEffect?: boolean;
    alignContent?: 'start' | 'center' | 'end';
}

export default NewsletterProps