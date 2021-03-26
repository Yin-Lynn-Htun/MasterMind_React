import React from 'react';
import './Model.css';

const model = (props) => {
    return (
        <div className={'container'}>
            <div className={'model'}>
                <p>{props.text}</p>
                <button className={'btn'} onClick={props.clicked}>
                    {props.buttonText}
                </button>
            </div>
        </div>
    );
};

export default model;
