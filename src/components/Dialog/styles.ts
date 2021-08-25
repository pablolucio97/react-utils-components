import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";
import DialogProps from "../../types/DialogProps";

export const Container = styled.div<DialogProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 999;
  width: 640px;
  padding: 1rem;
  margin: 1rem auto;
  box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px -2px,
    rgba(10, 10, 10, 0.02) 0px 0px 0px 1px;
  background: ${(props) => props.style?.background || palletCollors.white};
  border-radius: ${(props) => props.style?.borderRadius || "4px"};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;

  `;

export const Title = styled.h2`
  font-weight: 500;
  margin: 0.4rem;
  `;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0.4rem;
  `;

export const Content = styled.p`
  color: #444;
  text-align: center;
  width: 92%;
  font-size: 0.88rem;
  font-weight: 400;
  word-wrap: break-word;
  `;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: -0.8rem;
`;

export const ButtonClose = styled.button`
  position: absolute;
  width: 16px;
  height: 16px;
  background: ${palletCollors.errorBackground};
  color: ${palletCollors.white};
  font-weight: bold;
  border: none;
  outlined: none;
  cursor: pointer;
  border-radius: 4px;
  right: 0.8rem;
  top: 0.8rem;
  transition: all 0.3s ease;
`;

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 32px;
  background: ${palletCollors.primary};
  color: ${palletCollors.white};
  font-weight: 600;
  border: none;
  outlined: none;
  cursor: pointer;
  border-radius: 4px;
  margin: 1rem;
  transition: all 0.3s ease;
`;

export const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 32px;
  background: transparent;
  color: #222;
  font-weight: 500;
  border: none;
  outlined: none;
  cursor: pointer;
  border-radius: 4px;
  margin: 1rem;
`;

export const HideDialog = styled.div`
    & .hideDialog {
    background: cyan;
  }
`