import _ from "lodash";
import React, { useState } from "react";
import Holders from "./holders/holders";
import AnswerHolders from "../components/AnswerHolders/AnswerHolders";
import Button from "../components/UI/Button";
import classes from "./Layout.module.css";
import { displayModel } from "./displayModel";
import { generateChecker, replaceItemFromArr } from "../utils";

const DEFAULT_CURRENT_NUMBER = ["", "", "", ""];

const Layout = ({ correctAnswer }) => {
  const [showModel, setShowModel] = useState("");
  const [answerNumber, setAnswerNumber] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [currentSelectedNumber, setCurrentSelectedNumber] = useState(DEFAULT_CURRENT_NUMBER);

  const onClickInputNumber = (num) => {
    setSelectedNumber(num);
  };

  const onClickAnswerNumber = (index) => {
    if (selectedNumber === 0) {
      setShowModel("error");
      return;
    }

    setCurrentSelectedNumber(replaceItemFromArr(currentSelectedNumber, index, selectedNumber));
  };

  const onCheckAnswer = () => {
    if (currentSelectedNumber.includes("")) {
      setShowModel("fillAll");
      return;
    }

    if (JSON.stringify(currentSelectedNumber) === JSON.stringify(correctAnswer)) {
      setShowModel("won");
    } else if (answerNumber.length === 9) {
      setShowModel("lose");
    }

    setAnswerNumber([...answerNumber, currentSelectedNumber]);
    setCurrentSelectedNumber(DEFAULT_CURRENT_NUMBER);
  };

  const onClickPlayAgain = () => {
    setShowModel("");
    window.location.reload(false);
  };

  const closeModel = () => [setShowModel("")];
  const model = displayModel(showModel, onClickPlayAgain, closeModel);

  const onClickShowRuleHandler = () => {
    setShowModel("showRules");
  };

  const answerHolders = Array.from({ length: 10 }, (_, idx) => idx).map((id) => {
    let numbers = DEFAULT_CURRENT_NUMBER;

    if (id === answerNumber.length) {
      numbers = currentSelectedNumber;
    } else if (id < answerNumber.length) {
      numbers = answerNumber[id];
    }

    return (
      <AnswerHolders
        key={id}
        id={id}
        numbers={numbers}
        checkNumber={generateChecker(correctAnswer, numbers)}
        onClickAnswerNumber={onClickAnswerNumber}
        onCheckAnswer={onCheckAnswer}
        show={answerNumber.length === id}
      />
    );
  });

  return (
    <div style={{ position: "relative" }}>
      <h1 className={classes.title}>Master Mind</h1>
      <Button text="Show Rules" clicked={onClickShowRuleHandler} />
      <h2>Answer : {correctAnswer}</h2>
      <h3
        style={{
          color: "#fff",
        }}
        className={classes.text}
      >
        Current Selected Number :{" "}
        <span
          style={{ backgroundColor: `var(--color${classes.number})` }}
          className={classes.number}
        >
          {selectedNumber}
        </span>
      </h3>

      <Holders onClickInputNumber={onClickInputNumber} selectedNumber={selectedNumber} />
      {answerHolders}
      {model}
    </div>
  );
};

export default Layout;
