import React from "react";
import { Title } from '../atoms/Header';
import { Paragraph } from "../atoms/Paragraph";
import { Image } from "../atoms/Image";
import profilePic from '../assets/images/ProfilePicture.JPG';

const AppUI = () => {
    return (
        <div className="main-container">
            <Title text={"Inicio"} />
            <Paragraph text={"Bienvenido"} />
            <Image 
            imgLink={profilePic} 
            altText={"Foto de JuanviDev"} 
            figClassName={"img-cont"} 
            figcaption={"JuanviDev"} />
        </div>
    );
};

export { AppUI };