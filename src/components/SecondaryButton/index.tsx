import SecondaryButtonProps from '../../types/SecondaryButtonProps'
import { Button } from './styles'

const SecondaryButton = ({
    label,
    style,
    showPressedEffect,
    buttonStyle,
    action
  }: SecondaryButtonProps) => {
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

export { SecondaryButton }