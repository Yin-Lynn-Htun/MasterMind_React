import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button
            className={`${classes.btn} ${props.className}`}
            onClick={props.clicked}>
            {props.text}
        </button>
    )
}

export default Button
