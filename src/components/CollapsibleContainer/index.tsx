import { useState } from 'react'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import { Container, Title, Content, ButtonCollapse } from './styles'

import CollapsibleContainerProps from '../../types/CollapsibleContainerProps'

const CollapsibleContainer = ({ title, content, currentExpanded, onExpand }: CollapsibleContainerProps) => {

    const [isExpanded, setIsExpanded] = useState(true)

    function toggleExpands() {
        setIsExpanded(!isExpanded)
    }

    return (
        <Container >
            <Title>{title}</Title>
            <Content
                className={isExpanded ? 'expandCard' : ''}
            >
                {content}
            </Content>
            <ButtonCollapse onClick={toggleExpands}>
                {isExpanded ?
                    <MdExpandMore size={24} />
                    :
                    <MdExpandLess size={24} />
                }
            </ButtonCollapse>
        </Container>
    );
}

export default CollapsibleContainer;