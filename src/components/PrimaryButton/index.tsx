import PrimaryButtonProps from '../../types/PrimaryButtonProps'
import { Button } from './styles'

const PrimaryButton = ({ label, style, showPressedEffect }: PrimaryButtonProps) => {
    return (
        <Button
            label={label}
            style={style}
            showPressedEffect={showPressedEffect}
        >
            {label}
        </Button>
    )
}

export { PrimaryButton }