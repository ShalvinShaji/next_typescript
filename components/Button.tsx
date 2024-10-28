"use client";

import React from 'react';

type ButtonProps = {
    handleClick: () => void;
    button_content: string;
};

const Button: React.FC<ButtonProps> = ({ handleClick, button_content }) => {
    return (
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mb-5" onClick={handleClick}>
            {button_content}
        </button>
    );
};

export default Button;
