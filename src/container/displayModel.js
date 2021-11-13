import Model from '../components/Model/Model'
import Button from '../components/UI/Button'
import classes from './Layout.module.css'

export const displayModel = (showModel, onClickPlayAgain, closeModel) => {
    switch (showModel) {
        case 'won':
            return (
                <Model>
                    <p>Congratulations! You won!</p>
                    <Button text="Play Again!" clicked={onClickPlayAgain} />
                </Model>
            )

        case 'lose':
            return (
                <Model>
                    <p>Sorry! Good luck next time!</p>
                    <Button text="Play Again!" clicked={onClickPlayAgain} />
                </Model>
            )
        case 'error':
            return (
                <Model>
                    <p>Please select a number</p>
                    <Button
                        className={classes.marginCenter}
                        text="OK"
                        clicked={closeModel}
                    />
                </Model>
            )
        case 'fillAll':
            return (
                <Model>
                    <p>Please fill all numbers</p>
                    <Button
                        className={classes.marginCenter}
                        text="OK"
                        clicked={closeModel}
                    />
                </Model>
            )
        case 'showRules':
            return (
                <Model type="rule">
                    <p>
                        Try to guess the pattern, in both order and numbers,
                        within ten turns. After submitting a row, four hint pegs
                        will be appeared.
                    </p>

                    <p>
                        <span
                            style={{
                                display: 'inline-block',
                                background: 'black',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                            }}></span>
                        {'  '}
                        is for each code peg from the guess which is correct in
                        both number and position.
                    </p>

                    <p>
                        <span
                            style={{
                                display: 'inline-block',
                                background: 'white',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                            }}></span>
                        {'  '}
                        is for each code peg from the guess which is correct in
                        number but not position.
                    </p>

                    <div>
                        <span
                            style={{
                                display: 'inline-block',
                                background: 'red',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                            }}></span>
                        {'  '}
                        is for each code peg from the guess which is incorrect
                        in both number and position.
                    </div>
                    <Button
                        className={classes.marginCenter}
                        text="OK"
                        clicked={closeModel}
                    />
                </Model>
            )
        default:
            return <></>
    }
}
