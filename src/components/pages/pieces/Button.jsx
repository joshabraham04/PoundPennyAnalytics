import React from 'react';
import {Link} from 'react-router-dom';

function Button(props){
    const buttonStyle = {
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        borderRadius: props.borderRadius,
        padding: props.padding,
        display: "inline-block",
        fontFamily: "Inter",
        fontSize: props.fontSize,
        borderColor: props.borderColor,
        border: props.border,
        className: props.className,
        position: props.position,
        top: props.top,
        left: props.left,
        transform: props.transform,
        border: props.border,
        fontWeight: props.fontWeight,
    };

    return (
        <div>
            <button style={buttonStyle}>{props.text}</button>
        </div>
    );
};

export default Button;