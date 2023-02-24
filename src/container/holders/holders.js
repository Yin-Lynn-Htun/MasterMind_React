import React from "react";
import Holder from "../../components/Holder/holder";
import classes from "./holders.module.css";

const numbers = [1, 2, 3, 4, 5, 6];

const Holders = ({ onClickInputNumber, selectedNumber }) => {
  return (
    <div>
      <section className={classes.holders}>
        {numbers.map((number, index) => (
          <Holder
            key={index}
            value={number}
            isActive={selectedNumber === number}
            onSelectNumber={onClickInputNumber}
          />
        ))}
      </section>
    </div>
  );
};
export default Holders;
