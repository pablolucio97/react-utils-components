import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";
import HeaderProps from "../../types/HeaderProps";

export const Container = styled.header<HeaderProps>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: ${props => props.displayElements === 'center' ? 'center' : 'space-between'};
  width: 100vw;
  height: 64px;
  background-color: ${(props) =>
    props.headerBackground ? props.headerBackground : palletCollors.primary};
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
  margin: 0.4rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 0 .8rem 0 2.4rem;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 0 2.4rem 0 .8rem;
`;

export const Link = styled.a``;

export const Title = styled.h1`
  font-weight: 600;
  margin: 0.4rem;
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

export const ReadBarContainer = styled.div<HeaderProps>`
  display: ${(props) => (props.showReadbar ? "visible" : "none")};
  position: absolute;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: ${(props) => (props.readBarType === "thick" ? "6px" : "4px")};
  border-bottom: 1px solid #777;
`;

export const Progress = styled.div<HeaderProps>`
  width: 100%;
  background: ${(props) =>
    props.readBargradientBackground
      ? `linear-gradient(to right, ${props.readBargradientStartColor}, ${props.readBargradientEndColor});`
      : props.readBarbackground};
  height: 100%;
`;
