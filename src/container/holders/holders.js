import React from 'react';
import Holder from '../../components/Holder/holder';
import classes from './holders.module.css';

const Holders = (props) => {

        const holders = props.numbers.map((number, index) => {
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

        return (
            <div>
                <section className={classes.holders}>{holders}</section>
            </div>
        );
    }
;

export default Holders;
