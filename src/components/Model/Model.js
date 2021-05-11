import React from 'react'
import './Model.css'

const model = (props) => {
    return (
        <div className={'container'}>
            <div className={'model'}>
                <p>{props.text}</p>
                <p>
                    More info on{' '}
                    <a href={props.link} target="_blank" rel="noreferrer">
                        Wikipedia
                    </a>
                </p>
                <button className={'btn'} onClick={props.clicked}>
                    {props.buttonText}
                </button>
            </div>
        </div>
    )
}

export default model
