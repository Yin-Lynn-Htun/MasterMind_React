import React from "react";
import classes from "./AnswerHolders.module.css";
import HintHolders from "../HintHolders/HintHolders";
import Holder from "../Holder/Holder";
import Button from "../UI/Button";

const AnswerHolders = ({ numbers, checkNumber, onClickAnswerNumber, onCheckAnswer, show }) => {
  const holders = numbers.map((number, index) => {
    return (
      <Holder
        key={index}
        isActive={show}
        isDisabled={!show}
        value={number}
        onClick={() => onClickAnswerNumber(index)}
      />
    );
  });

  let buttonClass = [classes.checkBtn];

  if (!show) {
    buttonClass.push(classes.dontShow);
  }

  return (
    <>
      <section className={classes.holders}>
        <div style={{ display: "flex", gridColumn: "2 / span 1" }}>{holders}</div>
        {show ? (
          <Button text="Check" clicked={onCheckAnswer} />
        ) : (
          checkNumber && <HintHolders checkNumber={checkNumber} />
        )}
      </section>
    </>
  );
};

export default React.memo(AnswerHolders, (prevProps, nextProps) => {
  return !nextProps.show && nextProps.checkNumber === prevProps.checkNumber;
});
