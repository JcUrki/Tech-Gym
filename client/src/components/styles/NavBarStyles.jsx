import styled from 'styled-components'
import {FlexRow} from "../../globalStyles"

export const NavStyle = styled(FlexRow)`
    background-color: var(--bg-nav);
    padding: 0.1rem;
    height: 7rem;

    h2 {
        color: var(--h2-nav);
        width: 30rem;
        text-align: center;
        font-style: italic;

        span{
            color: var(--span-nav);
        }
    }

    img {
        height: 4rem;
        width: 10rem;
    }

    button {
        border: none;
        background: none;
    }
    
    button :hover {
        border: double rgba(201, 241, 250, 0.5);
        border-radius: 0.2rem;
        height: 2rem;
        width: 2rem;
    }
    
    input {
        width: 20rem;
        height: 2rem;
        text-indent: 0.5rem;
        font-weight: bold;
        color: #ae4300;
    }
`