import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";
import CollapsibleContainerProps from "../../types/CollapsibleContainerProps";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  background: ${palletCollors.white};
  width: 720px;
  border-radius: 4px;
  margin: 0.8rem;
  box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px -2px,
    rgba(10, 10, 10, 0.02) 0px 0px 0px 1px;
  transition: all 1s ease all;
  & .expandCard {
    transition: all 1s ease all;
    display: none;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  margin: 0.8rem 1.6rem;
  color: ${palletCollors.black1};
`;

export const Content = styled.span<CollapsibleContainerProps>`
  font-weight: 400;
  margin: 1rem;
  color: ${palletCollors.black3};
  transition: all 1s ease all;
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

