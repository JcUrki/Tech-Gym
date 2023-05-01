import React from "react";
import Carousel from "../components/Carousel";
import {
  Categoria,
  ImageImg,
  SectionCategorias,
  TituloCategorias, 
} from "../components/styles/Home.styled";
import {Link} from "react-router-dom"


export default function Home() {
  return (
    <>
      <Carousel />

      <section>
        <TituloCategorias><span>Tipos de clases</span></TituloCategorias>

        <SectionCategorias>
        <Link to="BodyCombatGallery" className="categoria"> 
          <Categoria>
              <h3>Body Combat</h3>
              <ImageImg src="https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVwb3J0ZSUyMGRlJTIwZnVlcnphfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="imatge" /> 
          </Categoria>
        </Link>

        <Link to="PilatesGallery" className="categoria"> 
          <Categoria> 
            <h3>Pilates</h3>
            <ImageImg src="https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGlsYXRlc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60" alt="imatge" />           
          </Categoria>
        </Link>

        <Link to="YogaGallery" className="categoria"> 
          <Categoria>           
            <h3>Yoga</h3>
            <ImageImg src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eW9nYXxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60" alt="imatge" />           
          </Categoria>
        </Link>

        <Link to="MeditacionGallery" className="categoria"> 
          <Categoria>           
            <h3>Meditación</h3>
            <ImageImg src="https://images.unsplash.com/photo-1531986733711-de47444e8cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaXRhY2lvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60" alt="imatge" />
          </Categoria>
        </Link>

        <Link to="ResistenciaGallery" className="categoria"> 
          <Categoria>
            <h3>Resistencia</h3>
            <ImageImg src="https://images.unsplash.com/photo-1648176778246-ffa7428a4ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVwb3J0ZSUyMGRlJTIwcmVzaXN0ZW5jaWF8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="imatge" />
          </Categoria>
        </Link>

        <Link to="/CardioGallery" className="categoria"> 
          <Categoria>
            <h3>Cardio</h3>
            <ImageImg src="https://images.unsplash.com/photo-1614691771330-13f4e0deec54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZGlvfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="imatge" />
          </Categoria>
        </Link>
        </SectionCategorias>
      </section> 
    </>
  )
}
