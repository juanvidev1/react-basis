import React from 'react'; 

const Image = ({ imgLink, altText, figClassName, imgClassName, figcaption }) => {
    if (!imgLink || !altText) return null;
    
    if (!figClassName) figClassName = "image-container";

    if (!figcaption) {
        return (
            <figure className={figClassName}>
                <img className={imgClassName} src={imgLink} alt={altText} /> 
            </figure>
        );
    }

    return (
        <figure className={figClassName}>
            <img className={imgClassName} src={imgLink} alt={altText} /> 
            <figcaption>{figcaption}</figcaption> 
        </figure>
    );    
}

export { Image };