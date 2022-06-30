import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    
    body{
        padding: 0 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: purple;
    }

}
    
`