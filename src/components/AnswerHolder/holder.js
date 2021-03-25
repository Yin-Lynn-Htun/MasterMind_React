import React from 'react'
import classes from './holder.module.css'

const Holder = props => {
    return (
        <div onClick={props.selectNumber.bind(this, props.id)} className={classes.holder}>
            {props.text}
        </div>
    )
}

export default Holder;