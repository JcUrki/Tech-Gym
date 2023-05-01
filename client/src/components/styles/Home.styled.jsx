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