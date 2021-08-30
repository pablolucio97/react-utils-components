import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        transition: all .32s ease;
    }

    html{
        scroll-behavior: smooth;
    }
    
    body{
        background: #eee;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        cursor: pointer;
        text-transform: uppercase;
    }


    a{
        text-decoration: none;
        cursor: pointer;
    }

`;
