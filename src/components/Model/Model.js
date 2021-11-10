import React from 'react'
import classes from './Model.module.css'

const model = (props) => {
    return (
        <div className={`${classes.container} ${props.className}`}>
            <div className={classes.model}>{props.children}</div>
        </div>
    )
}

export default model
