import React from 'react';
import classes from './holder.module.css';

const AnswerHolder = (props) => {

    const attachedClass = [classes.holder]
    let clicked = () => props.selectNumber(props.id, props.rowId)

    if (!props.show){
        attachedClass.push(classes.disable)
        clicked = () => {}
    }

    return (
        <div
            onClick={clicked}
            className={attachedClass.join(' ')}>
            {props.num}
        </div>
    );
};

export default AnswerHolder;
