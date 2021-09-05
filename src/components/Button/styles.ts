import styled from "styled-components";
import ButtonProps from "../../types/ButtonProps";
import { palletCollors } from "../../styles/palletCollors";

export const Button = styled.button<ButtonProps>`
  min-width: 80px;
  max-width: 320px;
  height: 32px;
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
  margin: 0.4rem;

  &:active {
    transform: ${(props) => (props.showPressedEffect ? "scale(.92)" : "none")};
  }

  &:hover {
    background: ${(props) =>
      props.buttonStyle === "outline"
        ? palletCollors.primary
        : palletCollors.white};
    color: ${(props) =>
      props.buttonStyle === "outline"
        ? palletCollors.white
        : palletCollors.primary};
  }
`;
