import { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'
import * as Styled from './styles'

import CollapsibleContainerProps from '../../types/CollapsibleContainerProps'

const CollapsibleContainer = ({ title, content, currentExpanded, onExpand }: CollapsibleContainerProps) => {

    const [isExpanded, setIsExpanded] = useState(true)

    function toggleExpands() {
        setIsExpanded(!isExpanded)
        console.log(isExpanded)
    }

    return (
        <Styled.Container>
            <Styled.SubContainer className={isExpanded ? '' : 'expandContainer'} >
                <Styled.Title>{title}</Styled.Title>
                <Styled.Content className={isExpanded ? 'showContent' : ''}
                >
                    {content}
                </Styled.Content>
                <Styled.ButtonCollapse onClick={toggleExpands}>
                    <MdExpandMore size={24} className={isExpanded ? '' : 'changeArrowOrientation'}/>
                </Styled.ButtonCollapse>
            </Styled.SubContainer>
        </Styled.Container>
    );
}

export default CollapsibleContainer;