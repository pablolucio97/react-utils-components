import PrimaryButtonProps from '../../types/SecondaryButtonProps'
import { Button } from './styles'

const PrimaryButton = ({
    label,
    style,
    showPressedEffect,
    buttonStyle,
    action
}: PrimaryButtonProps) => {
    return (
        <Button
            label={label}
            style={style}
            showPressedEffect={showPressedEffect}
            buttonStyle={buttonStyle}
            onClick={action}
        >
            {label}
        </Button>
    )
}

export { PrimaryButton }