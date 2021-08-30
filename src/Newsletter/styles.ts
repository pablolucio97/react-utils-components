import styled from "styled-components";
import { palletCollors } from "../styles/palletCollors";
import NewsletterProps from "../types/NewsletterProps";

export const Container = styled.menu`
  display: flex;
  flex-direction: column;
  width: 400px;
  background: ${palletCollors.white};
  color: ${palletCollors.white};

  box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px -2px,
    rgba(10, 10, 10, 0.02) 0px 0px 0px 1px;
  margin: 0.8rem;
  padding: 0.8rem;
`;

export const InfoContainer = styled.menu`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const ActionContainer = styled.menu`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${palletCollors.white};
  padding: 0.4rem;
`;

export const Title = styled.h2`
  font-weight: 500;
  margin: 0.4rem;
  color: ${palletCollors.black1};
`;

export const Text = styled.span`
  font-weight: 400;
  margin: 0.4rem;
  font-size: .92rem;
  color: ${palletCollors.black3};
`;

export const TextInput = styled.input<NewsletterProps>`
  border: 1px solid
    ${(props) =>
      props.style?.borderColor
        ? props.style.borderColor
        : palletCollors.black2};
  border-radius: ${(props) =>
    props.style?.borderRadius ? props.style.borderRadius : "4px"};
  min-width: 240px;
  height: 32px;
  padding: 0.4rem;
  outline: none;
  font-size: 0.92rem;
  transition: all .32s ease;

  &::placeholder {
    color: ${palletCollors.lightGray3};
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:focus{
      box-shadow: ${props => props.showFocusEffect ? 
      //eslint-disable-next-line
      '0 0 8px 0' + `${palletCollors.primary}` : 'none'}}
`;

export const Button = styled.button<NewsletterProps>`
  min-width: 96px;
  height: 32px;
  background: ${(props) =>
    props.buttonStyle?.background
      ? props.buttonStyle?.background
      : palletCollors.primary};
  font-weight: bold;
  border-radius: 4px;
  color: ${(props) => props.buttonStyle?.color?  props.buttonStyle?.color : palletCollors.white };
  border: 1px solid ${(props) => props.style?.background};
  transition: all 0.32s ease;
  padding: 0.8rem;
  margin: 0.4rem;
`;
