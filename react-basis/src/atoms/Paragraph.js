import React from "react";

const Paragraph = ({className, text}) => {
    if (!className) {
        className = 'default-paragraph'
    }

    if (!text) {
        return null;
    }

    return <p className={className}>{text}</p>
}

export { Paragraph };