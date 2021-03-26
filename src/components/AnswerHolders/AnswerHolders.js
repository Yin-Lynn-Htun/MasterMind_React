import React from "react";
import AnswerHolder from "./AnswerHolder/AnswerHolder";
import classes from './AnswerHolder.module.css'
import HintHolders from "../HintHolders/HintHolders";

const AnswerHolders = props => {

    console.log('answerHolders')
    const holders = props.numbers.map((number, index) => {
        return (
            <AnswerHolder
                show={props.show}
                key={index}
                num={number}
                id={index}
                rowId={props.id}
                selectNumber={props.onClickAnswerNumber}
            />
        );
    });

    let checkNum = null;

    if (props.checkNumber) {
        checkNum = <HintHolders checkNumber={props.checkNumber}/>;
    }

    return (
        <div>
            <div className={classes.container}>
                <section className={classes.holders}>{holders}</section>
                <div className={classes.answerHolder}>
                    {props.show ? <button
                        className={classes.checkBtn}
                        onClick={props.onCheckAnswer}>
                        CHECK
                    </button>: null}
                    {checkNum}
                </div>
            </div>
        </div>
    )
}

export default React.memo(AnswerHolders , ((prevProps, nextProps) => {
    return !nextProps.show && (nextProps.checkNumber === prevProps.checkNumber)
}))
