import styled from "styled-components";
import { FlexRow } from "../../globalStyles";

export const SectionCategorias = styled.section `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 2rem;

  .categoria{
    &:hover{
      background: rgba(255, 255, 255, 0.5);
    }
  }
`

export const Categoria = styled(FlexRow)`
  text-align: center;
  align-content: center;
  color:#f5be30;

  img {
    width: 22rem;
    height: 12rem;
    position: relative;
    overflow: hidden;
    z-index: -1;
  }

  h3 {
    font-size: 2rem;
    position: absolute;
    -webkit-text-stroke: 0.05rem #7a7a7a;
  }
`

export const ImageImg = styled.img`
  border-radius: 0.5rem;
`

export const TituloCategorias = styled.h1`
  text-align: center;

  span{
    margin: 2rem;
  }
  
  &::before, &::after {
    content: ' ';
    height: 0.15rem;
    width: 25rem;
    background-color: rgba(119, 24, 0, 0.4);
    display: inline-block;
    margin-bottom: 0.2rem;
  }
`