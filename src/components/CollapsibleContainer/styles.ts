import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";
import CollapsibleContainerProps from "../../types/CollapsibleContainerProps";

export const Container = styled.div<CollapsibleContainerProps>`
  transition: all .32s ease all;
  & .showContent {
    display: none;
  }

  & .expandContainer {
    padding: 1.2rem 0.4rem;
    box-shadow: ${props => props.effectColorOnExpand&&  `0 0 8px ${props.effectColorOnExpand}`};
  }


  & .slideButtom{
    transform: rotateX(180deg);
  }

  & .changeArrowOrientation{
    transform: rotateZ(180deg);
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  background: ${palletCollors.white};
  width: 1040px;
  border-radius: 4px;
  margin: 0.8rem;
  padding: .8rem 0.4rem;
  box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px -2px,
    rgba(10, 10, 10, 0.02) 0px 0px 0px 1px;
`

export const Title = styled.h3`
  font-weight: 500;
  margin: 0.8rem 1.6rem;
  color: ${palletCollors.black1};
`;

export const Content = styled.span<CollapsibleContainerProps>`
  font-weight: 400;
  margin: 1rem;
  color: ${palletCollors.black3};
  transition: all .32s ease all;

`;

export const ButtonCollapse = styled.button`
  position: absolute;
  width: 16px;
  height: 16px;
  background: ${palletCollors.primary};
  color: ${palletCollors.white};
  font-weight: bold;
  border-radius: 4px;
  right: 0.8rem;
  top: 40%;
  transition: all 0.32s ease;
`;

