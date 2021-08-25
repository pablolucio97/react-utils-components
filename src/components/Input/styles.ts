import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";
import InputProps from "../../types/InputProps";

export const Container = styled.div`
  position: relative;
  margin: 1.6rem;
`

export const TextInput = styled.input<InputProps>`
  border: 1px solid ${props => props.style?.borderColor? props.style.borderColor : palletCollors.primary };
  border-radius: ${props => props.style?.borderRadius? props.style.borderRadius :  '4px' };
  min-width: 240px;
  height: 40px;
  padding: .4rem;
  outline: none;
  font-size: .92rem;

  &::placeholder {
    color: ${palletCollors.lightGray3};
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:focus {
    border: 2px solid ${props => props.style?.borderColor? props.style.borderColor : palletCollors.primary };
  }
`;

export const Label = styled.label`
  pointer-events: none;
  position: absolute;
  top: -1rem;
  left: 16px;
  font-size: .92rem;
  transition: all 0.8s linear;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  background: white;
  box-sizing: border-box;
  margin: .4rem 0;
  padding: 0 .16rem;
`;



