import SectionProps from '../../types/SectionProps'
import {SectionContainer} from './styles'

export default function Section({firstMenuId} : SectionProps) {
    return (
        <SectionContainer id={firstMenuId}>
            <p>Hello from section</p>
        </SectionContainer>
    )
}

export {Section}
