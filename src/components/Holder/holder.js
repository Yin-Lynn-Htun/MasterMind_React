import React from "react";
import classes from "./holder.module.css";

const Holder = ({ isActive, value, onSelectNumber }) => {
  return (
    <div
      onClick={() => onSelectNumber(value)}
      className={`${classes.holder} ${isActive && classes.active}`}
      style={{ backgroundColor: `var(--color${value})` }}
    >
      {value}
    </div>
  );
};

export default Holder;
