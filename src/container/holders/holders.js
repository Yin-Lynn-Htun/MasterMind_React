import React from 'react';
import Holder from '../../components/Holder/holder';
import AnswerHolder from '../../components/AnswerHolder/holder';
import classes from './holders.module.css';

const Holders = (props) => {
    let holders = null;

    if (props.answer) {
        holders = props.numbers.map((number, index) => {
            return (
                <AnswerHolder
                    key={index}
                    text={number}
                    id={index}
                    selectNumber={props.onClickAnswerNumber}
                />
            );
        });
    } else {
        holders = props.numbers.map((number, index) => {
            return (
                <Holder
                    sNumber={props.selectedNumber}
                    key={index}
                    text={number}
                    id={index}
                    selectNumber={props.onClickInputNumber}
                />
            );
        });
    }

    let c = null;
    if (props.answer) {
        c = classes.container;
    }

    let checkNumber = null;
    if (props.checkNumber) {
        checkNumber = (
            <div>
                <p>Number at exact place : {props.checkNumber.exact}</p>
                <p>Number not at exact place : {props.checkNumber.contain}</p>
                <p>
                    Number does not contain :{' '}
                    {4 - props.checkNumber.exact - props.checkNumber.contain}
                </p>
            </div>
        );
    }

    return (
        <div>
            <div className={c}>
                <section className={classes.holders}>{holders}</section>
                {props.answer ? (
                    <button
                        className={classes.check}
                        onClick={props.checkAnswer}>
                        Check
                    </button>
                ) : null}
            </div>
            {checkNumber}
        </div>
    );
};

export default Holders;
