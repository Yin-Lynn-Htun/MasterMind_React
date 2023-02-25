import React from "react";
import classes from "./Holder.module.css";

const Holder = ({ isActive, value, onClick, isSelector, isDisabled = false }) => {
  return (
    <div
      onClick={!isDisabled ? onClick : undefined}
      className={`${classes.holder} ${isActive && classes.active} ${isSelector && classes.big}`}
      style={{
        backgroundColor: `var(--color${value})`,
        cursor: isDisabled ? "not-allowed" : "pointer",
      }}
    >
      {value}
    </div>
  );
};

export default Holder;
