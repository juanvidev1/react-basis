import React from "react";
import { Title } from "../atoms/Header";
import { Paragraph } from "../atoms/Paragraph";
import { Image } from "../atoms/Image";
// import profilePic from '../assets/images/ProfilePicture.JPG';

const AppUI = () => {
  return (
    <div className="main-container">
      <Title text={"Inicio"} />
      <Paragraph text={"Bienvenido"} />
      <Image
        imgLink={
          "https://images.unsplash.com/photo-1703756292790-884c3d635e79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
        }
        altText={"Foto de gorila"}
        figClassName={"img-cont"}
        figcaption={"Ape image - Imagen de un gorila"}
      />
    </div>
  );
};

export { AppUI };
