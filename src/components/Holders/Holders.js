import React from "react";
import Holder from "../Holder/Holder";
import classes from "./Holders.module.css";

const numbers = [1, 2, 3, 4, 5, 6];

const Holders = ({ onClickInputNumber, selectedNumber }) => {
  return (
    <div>
      <section className={classes.holders}>
        {numbers.map((number, index) => (
          <Holder
            isSelector={true}
            key={index}
            value={number}
            isActive={selectedNumber === number}
            onClick={() => onClickInputNumber(number)}
          />
        ))}
      </section>
    </div>
  );
};
export default Holders;
