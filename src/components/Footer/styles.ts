import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";
import FooterProps from "../../types/FooterProps";

export const Container = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${palletCollors.primary};
`;

export const ColumnsContainer = styled.div`
  width: 1080px;
  background: ${palletCollors.primary};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: ${palletCollors.white};
  padding: 0.8rem;
  margin: 0 80px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 16px;
`;

export const FooterTitle = styled.h2`
  font-weight: 500;
  margin: .4rem 0;
  font-size: 1.16rem;
  color: ${palletCollors.white};
  text-align: start;
`;

export const FooterLink = styled.a`
  font-weight: 400;
  font-size: 0.8rem;
  color: ${palletCollors.lightGray3};
  cursor: pointer;
  word-break: break-word;
  text-align: start;

  &:hover {
    color: ${palletCollors.white};
  }
`;

export const ExtraDataContainer = styled.div<FooterProps>`
  width: 100vw;
  display: flex;
  justify-content: center;
  background: ${palletCollors.primary};
  padding: .8rem;
  display: ${props => props.showExtraData? 'visible' : 'none'};
`;

export const ExtraDataText = styled.span`
  font-size: 0.8rem;
  font-weight: 300;
  word-break: break-word;
  color: ${palletCollors.darkGray3};
`;
