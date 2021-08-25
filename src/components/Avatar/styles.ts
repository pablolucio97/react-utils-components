import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";
import AvatarProps from "../../types/AvatarProps";

export const Container = styled.div<AvatarProps>`
  width: ${(props) =>
     props.size === "tiny"
      ? "40px"
      : props.size === "small"
      ? "56px"
      : props.size === "medium"
      ? "72px "
      : "94px"};
  height: ${(props) =>
    props.size === "tiny"
      ? "40px"
      : props.size === "small"
      ? "56px"
      : props.size === "medium"
      ? "72px "
      : "94px"};
  margin: 0.8rem;
  border-color: ${(props) => props.borderColor || palletCollors.primary};
  border-width: ${(props) =>
    props.borderType === "thick"
      ? "4px"
      : props.borderType === "thin"
      ? "2px"
      : "0"};
  border-style: solid;
  border-radius: 50%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
