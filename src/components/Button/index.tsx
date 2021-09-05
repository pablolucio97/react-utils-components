import ButtonProps from '../../types/ButtonProps'
import * as Styled from './styles'

const Button = ({
    label,
    style,
    showPressedEffect,
    buttonStyle,
    action,
    children,
    disabled
}: ButtonProps) => {
    return (
        <Styled.Button
            type='submit'
            label={label}
            style={style}
            showPressedEffect={showPressedEffect}
            buttonStyle={buttonStyle}
            onClick={action}
            disabled={disabled}
        >
            {label}
            {children}
        </Styled.Button>
    )
}

export { Button }