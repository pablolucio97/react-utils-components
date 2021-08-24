import styled from 'styled-components'
import ReadBarProgressProps from '../../types/ReadBarProgressProps'


export const Container = styled.div<ReadBarProgressProps>`
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: ${props => props.barType === 'thick' ? '6px' : '4px'};
    border-bottom: 1px solid #777;
    margin-top: -.4rem;
    `

export const Progress = styled.div<ReadBarProgressProps>`
    width: 100%;
    background: ${props => props.gradientBackground? 
     `linear-gradient(to right, ${props.gradientStartColor}, ${props.gradientEndColor});` 
     : props.background };
    height: 100%;

`