import styled from "styled-components";
import ReadBarProps from "../../types/ReadBarProps";

export const Container = styled.div<ReadBarProps>`
display: flex;
z-index: 999;
width: 100vw;
height: ${(props) => (props.barType === "thick" ? "6px" : "4px")};
border-bottom: 1px solid #777;
`;

export const Progress = styled.div<ReadBarProps>`
width: 100%;
background: ${(props) =>
  props.gradientBackground
    ? `linear-gradient(to right, ${props.gradientStartColor}, ${props.gradientEndColor});`
    : props.background};
height: 100%;
`;
