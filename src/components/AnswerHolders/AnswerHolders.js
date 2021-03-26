import React from 'react';
import AnswerHolder from './AnswerHolder/AnswerHolder';
import classes from './AnswerHolders.module.css';
import HintHolders from '../HintHolders/HintHolders';
import _ from 'lodash';

const AnswerHolders = (props) => {
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

    let eleToShow = <HintHolders checkNumber={props.checkNumber} />;

    if (props.show) {
        eleToShow = (
            <button className={classes.checkBtn} onClick={props.onCheckAnswer}>
                CHECK
            </button>
        );
    } else if (
        _.isEqual(props.checkNumber, [
            'dontShow',
            'dontShow',
            'dontShow',
            'dontShow',
        ])
    ) {
        eleToShow = <div className={classes.box}></div>;
    }

    let buttonClass = [classes.checkBtn];

    if (!props.show) {
        buttonClass.push(classes.dontShow);
    }

    return (
        <div>
            <div className={classes.container}>
                <section className={classes.holders}>
                    {holders}
                    {eleToShow}
                </section>
            </div>
        </div>
    );
};

export default React.memo(AnswerHolders, (prevProps, nextProps) => {
    return !nextProps.show && nextProps.checkNumber === prevProps.checkNumber;
});
