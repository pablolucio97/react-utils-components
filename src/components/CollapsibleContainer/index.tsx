import { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'
import { Container, Title, Content, ButtonCollapse, SubContainer } from './styles'

import CollapsibleContainerProps from '../../types/CollapsibleContainerProps'

const CollapsibleContainer = ({ title, content, currentExpanded, onExpand }: CollapsibleContainerProps) => {

    const [isExpanded, setIsExpanded] = useState(true)

    function toggleExpands() {
        setIsExpanded(!isExpanded)
        console.log(isExpanded)
    }

    return (
        <Container>
            <SubContainer className={isExpanded ? '' : 'expandContainer'} >
                <Title>{title}</Title>
                <Content className={isExpanded ? 'showContent' : ''}
                >
                    {content}
                </Content>
                <ButtonCollapse onClick={toggleExpands} className={isExpanded ? '' : 'changeArrowOrientation'}>
                    <MdExpandMore size={24} />
                </ButtonCollapse>
            </SubContainer>
        </Container>
    );
}

export default CollapsibleContainer;