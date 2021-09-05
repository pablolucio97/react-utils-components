import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";
import HeaderProps from "../../types/HeaderProps";

export const Container = styled.header<HeaderProps>`
  display: flex;
  position: ${props => props.fixHeader? 'fixed' : 'relative'};
  align-items: center;
  z-index: 10;
  justify-content: ${props => props.displayElements === 'center' ? 'center' : 'space-between'};
  width: 100vw;
  height: 64px;
  background-color: ${(props) =>
    props.background ? props.background : palletCollors.primary};
`;

export const Logo = styled.img<HeaderProps>`
  width: ${(props) =>
    props.logoSize === "tiny"
      ? "48px"
      : props.logoSize === "small"
      ? "64px"
      : props.logoSize === "medium"
      ? "80px"
      : "96px"};
  height: ${(props) =>
    props.logoSize === "tiny"
      ? "24px"
      : props.logoSize === "small"
      ? "32px"
      : props.logoSize === "medium"
      ? "40px "
      : "48px"};
  object-fit: cover;
  margin: 0.8rem 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: .64rem .8rem 0 2.4rem;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2.4rem 0 .4rem;
`;

export const Link = styled.a``;

export const Title = styled.h1`
  font-weight: 600;
  margin: 0.4rem;
  font-size: 1.6rem;
  color: ${palletCollors.white};
`;

export const SearchBar = styled.input<HeaderProps>`
  display: ${(props) => (props.showSearchBar ? "visible" : "none")};
  border: 1px solid
    ${(props) =>
      props.style?.borderColor
        ? props.style.borderColor
        : palletCollors.primary};
  border-radius: ${(props) =>
    props.style?.borderRadius ? props.style.borderRadius : "4px"};
  min-width: 240px;
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
