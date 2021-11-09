import React from 'react'
import classes from './holder.module.css'

const Holder = (props) => {
    return (
        <div
            onClick={props.selectNumber.bind(this, props.text)}
            className={`${classes.holder} ${
                props.sNumber === props.text && classes.active
            }`}
            style={{ backgroundColor: `var(--color${props.text})` }}>
            {props.text}
        </div>
    )
}

export default Holder
