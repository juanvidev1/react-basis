import React from "react";

const Title = ({className, text}) => {

    if (!className) {
        className = "default-title";
    }

    if (!text) {
        return null;
    }

    return (
        <h1 className={className}>{text}</h1>
    );
};

export { Title };