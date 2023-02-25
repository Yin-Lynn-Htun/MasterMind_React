import React from "react";
import classes from "./Model.module.css";

const model = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.modal}>{props.children}</div>
      </div>
    </div>
  );
};

export default model;
