import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button className={classes.btn} onClick={props.clicked}>
            {props.text}
        </button>
    )
}

export default Button
