import styled from "styled-components";
import PrimaryButtonProps from "../../types/PrimaryButtonProps";
import {palletCollors} from '../../styles/palletCollors'

export const Button = styled.button<PrimaryButtonProps>`
  min-width: 80px;
  height: 32px;
  background: ${(props) => props.style?.background || palletCollors.primary};
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  transition: all 0.32s ease;
  padding: .8rem;

    &:active{
        transform: ${props => props.showPressedEffect? 'scale(.92)' : 'none'}
    }

`;