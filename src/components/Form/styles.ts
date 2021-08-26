import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";
import FormProps from "../../types/FormProps";
import InputProps from "../../types/InputProps";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px -2px,
    rgba(10, 10, 10, 0.02) 0px 0px 0px 1px;
  background: ${palletCollors.white};
  margin: 0.8rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  font-weight: 500;
  margin: 1.6rem 0.8rem 0.8rem 1.6rem;
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 0.8rem;
`;

export const TextInput = styled.input<InputProps>`
  border: 1px solid
    ${(props) =>
      props.style?.borderColor
        ? props.style.borderColor
        : palletCollors.primary};
  border-radius: ${(props) =>
    props.style?.borderRadius ? props.style.borderRadius : "4px"};
  width: 240px;
  height: 40px;
  padding: 0.4rem;
  outline: none;
  font-size: 0.92rem;

  &::placeholder {
    color: ${palletCollors.lightGray3};
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:focus {
    border: 2px solid
      ${(props) =>
        props.style?.borderColor
          ? props.style.borderColor
          : palletCollors.primary};
  }
`;

export const Label = styled.label`
  pointer-events: none;
  position: absolute;
  top: -1rem;
  left: 16px;
  font-size: 0.92rem;
  transition: all 0.8s linear;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  background: white;
  box-sizing: border-box;
  margin: 0.4rem 0;
  padding: 0 0.16rem;
`;

export const PostButton = styled.button<FormProps>`
  min-width: 240px;
  height: 40px;
  background: ${(props) =>
    props.buttonStyle === "outline"
      ? palletCollors.white
      : palletCollors.primary};
  color: ${(props) =>
    props.buttonStyle === "outline"
      ? palletCollors.primary
      : palletCollors.white};
  font-weight: bold;
  border-radius: 4px;
  border: 1px solid ${(props) => props.style?.background};
  transition: all 0.32s ease;
  padding: 0.8rem;
  margin: 0.8rem auto 0.8rem;
  outline: none;

  &:focus {
    border: 2px solid
      ${(props) =>
        props.style?.borderColor
          ? props.style.borderColor
          : palletCollors.primary};
  }
`;
