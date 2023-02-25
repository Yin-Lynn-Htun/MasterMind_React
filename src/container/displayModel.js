import Model from "../components/Model/Model";
import Button from "../components/UI/Button";
import classes from "./Layout.module.css";

const RuleCircle = ({ color }) => {
  return (
    <span
      style={{
        display: "inline-block",
        background: color,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        marginRight: "10px",
        boxShadow: "2px 2px 7px #000000ba",
      }}
    />
  );
};

const ModalBtn = ({ text, onClickBtn }) => {
  return <Button className={classes.marginCenter} text={text} clicked={onClickBtn} />;
};

export const displayModel = (showModel, onClickPlayAgain, closeModel) => {
  if (showModel === "") return null;

  if (showModel === "showRules")
    return (
      <Model>
        <p className={classes.modalTitle}>{"Game Rules"}</p>
        <p>
          Try to guess the pattern, in both order and numbers, within ten turns. After submitting a
          row, four hint pegs will be appeared.
        </p>

        <p>
          <RuleCircle color={"black"} />
          is for each code peg from the guess which is correct in both number and position.
        </p>

        <p>
          <RuleCircle color={"white"} />
          is for each code peg from the guess which is correct in number but not position.
        </p>

        <div>
          <RuleCircle color={"red"} />
          is for each code peg from the guess which is incorrect in both number and position.
        </div>
        <ModalBtn text="OK" onClickBtn={closeModel} />
      </Model>
    );

  let modalConfig = {};

  switch (showModel) {
    case "won":
      modalConfig.title = "Congratulations! You won!";
      modalConfig.text = "Play Again!";
      modalConfig.onClickBtn = onClickPlayAgain;
      break;
    case "lose":
      modalConfig.title = "Sorry! Good luck next time!";
      modalConfig.text = "Play Again!";
      modalConfig.onClickBtn = onClickPlayAgain;
      break;
    case "error":
      modalConfig.title = "Please select a number";
      modalConfig.text = "Ok";
      modalConfig.onClickBtn = closeModel;
      break;
    default:
      modalConfig.title = "Please fill all numbers";
      modalConfig.text = "Ok";
      modalConfig.onClickBtn = closeModel;
      break;
  }

  const { title, ...rest } = modalConfig;

  return (
    <Model>
      <p className={classes.modalTitle}>{title}</p>
      <ModalBtn {...rest} />
    </Model>
  );
};
