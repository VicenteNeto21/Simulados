import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;400;600;900&display=swap');

    * {
        padding: 0;
        margin: 0;
        font-family: ''Lexend Deca', sans-serif;
        box-sizing: border-box;
    }

    body {
        background: #DADADA;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        font-weight: 400;
    }
`;
