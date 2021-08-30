import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";

export const MenuContainer = styled.menu`
    display: flex;
    width: 100vw;
    background: ${palletCollors.secondary};
    color: ${palletCollors.white};
`

export const MenuItem = styled.a`
    color: white;
    margin: .4rem;
    padding: .4rem;
    text-transform: capitalize;
    &:hover{
        background: ${palletCollors.primary}
    }
`