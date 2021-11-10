import React from 'react'
import classes from './Model.module.css'

const model = (props) => {
    return (
        <div
            style={{ textAlign: props.type === 'rule' && 'start' }}
            className={`${classes.container} ${props.className}`}>
            <div className={classes.model}>{props.children}</div>
        </div>
    )
}

export default model
