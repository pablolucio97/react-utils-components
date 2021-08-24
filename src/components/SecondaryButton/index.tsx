import SecondaryButtonProps from '../../types/SecondaryButtonProps'
import { Button } from './styles'

const SecondaryButton = ({ label, style, showPressedEffect, buttonStyle  }: SecondaryButtonProps) => {
    return (
        <Button
            label={label}
            style={style}
            showPressedEffect={showPressedEffect}
            buttonStyle={buttonStyle}
        >
            {label}
        </Button>
    )
}

export { SecondaryButton }