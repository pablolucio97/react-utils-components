import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";
import SocialRibbonProps from "../../types/SocialRibbonsProps";

export const Container = styled.div<SocialRibbonProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.displayContent === "start"
      ? "flex-start"
      : props.displayContent === "end"
      ? "flex-end"
      : "center"};
  background: ${(props) =>
    props.background ? props.background : palletCollors.primary};
  width: 100vw;
`;

export const Link = styled.a<SocialRibbonProps>`
  font-size: ${(props) =>
    props.iconsStyle?.iconsSize === "tiny"
      ? "24px"
      : props.iconsStyle?.iconsSize === "small"
      ? "32px"
      : props.iconsStyle?.iconsSize === "medium"
      ? "40px"
      : "48px"};
  color: ${(props) =>
    props.iconsStyle?.iconsColor
      ? props.iconsStyle.iconsColor
      : palletCollors.white};
  margin: 0.4rem.8rem 0;
  
`;
