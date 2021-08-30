import styled from "styled-components";
import TitleProps from "../../types/TitleProps";

export const TitleElement = styled.h1<TitleProps>`
  font-size: ${(props) =>
    props.renderElement === "h1"
      ? "2.4rem"
      : props.renderElement === "h2"
      ? "1.6rem"
      : "1.2rem"};
    margin: .8rem;
`;
