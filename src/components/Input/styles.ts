import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";

export const Container = styled.div`
  position: relative;
  margin: 1.6rem;
`

export const TextInput = styled.input`
  border: 1px solid ${palletCollors.primary};
  border-radius: 4px;
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
    border: 2px solid ${palletCollors.primary};
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



