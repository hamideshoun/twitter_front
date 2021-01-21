import React from "react";

export default ({disabled, elementId, className, text, onClick}) => (
    <button
        disabled={disabled}
        id={elementId}
        className="className" onClick={onClick}>
        {text}
    </button>
)