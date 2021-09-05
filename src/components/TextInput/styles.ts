import styled, { css, DefaultTheme } from 'styled-components';
import { TextInputProps } from '.';
import { palletCollors } from '../../styles/palletCollors';

const onInputError = (theme: DefaultTheme, errorMessage: string) => css`
  border: 2px solid ${palletCollors.primary};
  box-shadow: 0 0 2px 0 ${palletCollors.primary};
  &:focus {
    border: 2px solid ${palletCollors.primary};
    box-shadow: 0 0 2px 0 ${palletCollors.primary};
  }
  ${!!errorMessage &&
  css`
    &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
      color: ${palletCollors.primary};
      background: ${palletCollors.primary};
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 2.4rem;
  `}
`;

export const InputWrapper = styled.div<Pick<TextInputProps, 'errorMessage'>>`
  ${({ theme, errorMessage }) => css`
    position: relative;
    > svg {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: 1rem;
      width: 20px;
      height: 20px;
      color: ${theme.colors.gray6};
      z-index: ${theme.layers.layer1};
      ${!!errorMessage &&
      css`
        color: ${theme.colors.warning};
      `}
    }
    *:focus ~ svg {
      color: ${theme.colors.primary};
      ${!!errorMessage &&
      css`
        color: ${theme.colors.warning};
      `}
    }
    *:disabled ~ svg {
      color: ${theme.colors.gray3};
    }
  `}
`;

type StyledInputType = Pick<TextInputProps, 'errorMessage' | 'as' | 'type'>;

export const Input = styled.input<StyledInputType>`
  ${({ theme, errorMessage, as }) => css`
    border: 1px solid ${theme.colors.gray3};
    width: 100%;
    height: 32px;
    font-size: .88rem;
    transition: ${theme.transitions.fast};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    background: ${theme.colors.white};
    padding-right: 3.7rem;
    border-radius: ${theme.spacings.tiny};
    outline: none;
    &::placeholder {
      visibility: hidden;
      opacity: 0;
    }
    &:focus {
      border: ${theme.spacings.xxtiny} solid ${theme.colors.primary};
      box-shadow: 0 0 ${theme.spacings.xtiny} 0 ${theme.colors.primary};
      background: ${theme.colors.white};
    }
    &:focus
      + ${Label},
      &:not(:placeholder-shown)
      + ${Label},
      &:-webkit-autofill
      + ${Label} {
      top: 0;
      transform: translate(0, -50%);
      font-size: .8rem;
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
      filter: none;
      ${as === 'textarea' &&
      css`
        transform: translate(0, -50%);
      `}
    }
    &:disabled {
      background: ${theme.colors.gray1};
      color: ${theme.colors.gray5};
    }
    &:disabled + ${Label} {
      background: ${theme.colors.gray5};
      color: ${theme.colors.gray2};
    }
    ${as === 'textarea' &&
    css`
      min-height: ${theme.frameSizes.xsmall};
    `}
    ${!!errorMessage && onInputError(theme, errorMessage)}
  `}
`;

export const Label = styled.label<{ element: string }>`
  ${({ theme, element }) => css`
    display: inline;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: ${theme.spacings.xsmall};
    font-size: .8rem;
    height: .92rem;
    transition: ${theme.transitions.fast};
    background: ${theme.colors.white};
    padding: 0.8rem .8rem;
    display: flex;
    align-items: center;
    line-height: 1;
    z-index: ${theme.layers.layer1};
    color: ${theme.colors.gray6};
    border-radius: ${theme.spacings.tiny};
    ${element === 'textarea' &&
    css`
      top: ${theme.spacings.large};
      transform: translate(0, -50%);
    `}
  `}
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.warning};
    margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.large};
  `}
`;