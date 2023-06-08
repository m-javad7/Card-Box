import React from 'react';

const CardButton = ({ buttonText, onButtonClick }) => {
    return (
        <button className="card-box-button" onClick={onButtonClick}>
            {buttonText}
        </button>
    );
};

export default CardButton;
