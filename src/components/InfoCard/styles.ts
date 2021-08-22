import styled from 'styled-components'
import InfoCardProps from '../../types/InfoCardProps'


export const Container = styled.div<InfoCardProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 240px;
    height: 320px;
    padding: .8rem;
    margin: .4rem;
    box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px -2px,
    rgba(10, 10, 10, 0.02) 0px 0px 0px 1px;
    text-overflow: ellipsis;
    background: ${props => props.style?.background};
    border-radius: ${props => props.style?.borderRadius || '4px'};
    transition: all .3s ease-in-out;

    &:hover{
        transform: ${props => props.animationOnHover? 'scale(1.024)' : 'none'}
    }
`

export const Title = styled.h1`
    font-weight: 600;
    margin: .4rem;
`

export const SubTitle = styled.h2`
    font-weight: 500;
    margin: 1rem;
`

export const Content = styled.p`
    text-align: justify;
    font-size: .92rem;
    width: 100px;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    `

export const ContentContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: .4rem;
    text-align: start;
    
`
