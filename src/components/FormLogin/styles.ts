import styled, { css } from "styled-components";
import { palletCollors } from "../../styles/palletCollors";

export const Wrapper = styled.form`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.white};
    padding: 2.4rem;
    width: 560px;
    border-radius: 4px;
  `}
`;

export const ButtonWrapper = styled.div``;

export const Title = styled.h2`
  font-weight: 500;
  margin: 0.24rem;
  color: ${palletCollors.black2};
  z-index: 10;
  margin-bottom: 2.4rem;
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    background: ${theme.colors.warning};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    width: 400px;
  `}
`;
