import styled from "styled-components";
import PrimaryButtonProps from "../../types/SecondaryButtonProps";
import {palletCollors} from '../../styles/palletCollors'

export const Button = styled.button<PrimaryButtonProps>`
  min-width: 80px;
  height: 32px;
  background: ${(props) => props.buttonStyle === 'outlined' ? palletCollors.white :  palletCollors.primary};
  color: ${(props) => props.buttonStyle === 'outlined' ?  palletCollors.primary : palletCollors.white };
  font-weight: bold;
  border-radius: 4px;
  border: 1px solid ${props => props.style?.background};
  transition: all 0.32s ease;
  padding: .8rem;
  margin: .4rem;

    &:active{
        transform: ${props => props.showPressedEffect? 'scale(.92)' : 'none'}
    }

`;