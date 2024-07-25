import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    html, body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        height: 100%;
    }

    body {
        background-color: ${({ theme }) => theme.white};

        @media (min-width: 768px) {
            padding: 0px 6rem;
        }

        @media (max-width: 768px) {
            padding: 0px 0.75rem;
        }
    }
`
