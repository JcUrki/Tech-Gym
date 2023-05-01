import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root{
    --bg-nav: #596277;
    --bg-ft: #596277;
    --bg-form: #5D657C53;
    --bg-bt1: ;
    --bg-bt2: #FF4A00;
    --bg-bt3: #30EAF5;
    --h2-nav: white;
    --span-nav: #ffca4e;
  }

  * {
    box-sizing: border-box; 
  } 

  body{
    margin: 0;
    padding: 0;
  }
`

/*--- Global ---*/ 
export const FlexRow = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const FlexColumn = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default  GlobalStyle