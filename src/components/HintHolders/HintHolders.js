import React from "react";
import "./HintHolders.css";

const HintHolders = (props) => {
  return (
    <div className={"hintHolder"}>
      {props.checkNumber.map((type, index) => {
        return <HintHolder key={index} id={index} type={type} />;
      })}
    </div>
  );
};

const HintHolder = (props) => {
  const attachClass = ["holder", props.type, `postion${props.id}`];

  return <div className={attachClass.join(" ")}></div>;
};

export default React.memo(HintHolders, (prevProps, nextProps) => {
  return prevProps.checkNumber === nextProps.checkNumber;
});
