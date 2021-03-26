import React from 'react';
import classes from './holder.module.css';

const Holder = (props) => {
    const attachClass = [classes.holder];

    if (props.sNumber === props.text) {
        attachClass.push(classes.active);
    }

    return (
        <div
            onClick={props.selectNumber.bind(this, props.text)}
            className={attachClass.join(' ')}>
            {props.text}
        </div>
    );
};

export default Holder;
