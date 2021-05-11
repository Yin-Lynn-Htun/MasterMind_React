import _ from 'lodash'
import React, { useState } from 'react'
import Holders from './holders/holders'
import Model from '../components/Model/Model'
import AnswerHolders from '../components/AnswerHolders/AnswerHolders'
import Button from '../components/UI/Button'

const Layout = (props) => {
    const [selectedNumber, setSelectedNumber] = useState(0)
    const [answerNumber, setAnswerNumber] = useState({
        1: ['', '', '', ''],
        2: ['', '', '', ''],
        3: ['', '', '', ''],
        4: ['', '', '', ''],
        5: ['', '', '', ''],
        6: ['', '', '', ''],
        7: ['', '', '', ''],
        8: ['', '', '', ''],
        9: ['', '', '', ''],
        10: ['', '', '', ''],
    })
    const [checkNumber, setCheckNumber] = useState({
        1: ['dontShow', 'dontShow', 'dontShow', 'dontShow'],
        2: ['dontShow', 'dontShow', 'dontShow', 'dontShow'],
        3: ['dontShow', 'dontShow', 'dontShow', 'dontShow'],
        4: ['dontShow', 'dontShow', 'dontShow', 'dontShow'],
        5: ['dontShow', 'dontShow', 'dontShow', 'dontShow'],
        6: ['dontShow', 'dontShow', 'dontShow', 'dontShow'],
        7: ['dontShow', 'dontShow', 'dontShow', 'dontShow'],
        8: ['dontShow', 'dontShow', 'dontShow', 'dontShow'],
        9: ['dontShow', 'dontShow', 'dontShow', 'dontShow'],
        10: ['dontShow', 'dontShow', 'dontShow', 'dontShow'],
    })
    const [showModel, setShowModel] = useState('')
    const [counter, setCounter] = useState(1)

    const onClickInputNumber = (num) => {
        setSelectedNumber(num)
    }

    const onClickAnswerNumber = (index, rowId) => {
        if (selectedNumber === 0) {
            setShowModel('error')
            return
        }

        const answer = { ...answerNumber }
        const selectedRow = answer[rowId].slice()
        selectedRow.splice(index, 1, selectedNumber)
        answer[rowId] = selectedRow
        setAnswerNumber(answer)
    }

    const onCheckAnswer = () => {
        if (answerNumber[counter].includes('')) {
            setShowModel('fillAll')
            return
        }
        const answer = []
        props.correctAnswer.forEach((num, index) => {
            if (num === answerNumber[counter][index]) {
                answer.push('exact')
            }
        })

        if (answer.length === 4) {
            setShowModel('won')
        } else if (counter === 10) {
            setShowModel('lose')
        }

        let count = 0
        const tempAnswer = _.countBy(answerNumber[counter])
        const tempCorrect = _.countBy(props.correctAnswer)
        for (let key in tempCorrect) {
            count += Math.min(tempAnswer[key], tempCorrect[key])
                ? Math.min(tempAnswer[key], tempCorrect[key])
                : 0
        }

        const l1 = answer.length
        for (let i = 0; i < count - l1; i++) {
            answer.push('contain')
        }

        const l = answer.length
        for (let i = 0; i < 4 - l; i++) {
            answer.push('not-contain')
        }

        const check = { ...checkNumber }
        check[counter] = [...answer]
        setCheckNumber(check)
        setCounter(counter + 1)
    }

    const onClickPlayAgain = () => {
        setShowModel(false)
        window.location.reload(false)
    }

    const onClickShowRuleHandler = () => {
        setShowModel('showRules')
    }

    const answerHolders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => {
        return (
            <AnswerHolders
                key={id}
                id={id}
                numbers={answerNumber[id]}
                onClickAnswerNumber={onClickAnswerNumber}
                onCheckAnswer={onCheckAnswer}
                checkNumber={checkNumber[id]}
                show={counter === id}
            />
        )
    })

    return (
        <div style={{ position: 'relative' }}>
            <h1>Master Mind</h1>
            <Button text="Show Rules" clicked={onClickShowRuleHandler} />
            <h3>Current Selected Number : {selectedNumber}</h3>

            <Holders
                numbers={[1, 2, 3, 4, 5, 6]}
                onClickInputNumber={onClickInputNumber}
                answer={false}
                selectedNumber={selectedNumber}
            />
            {answerHolders}

            {showModel !== '' ? (
                showModel === 'won' ? (
                    <Model
                        text={'You won'}
                        buttonText={'Play again!'}
                        clicked={onClickPlayAgain}
                    />
                ) : showModel === 'lose' ? (
                    <Model
                        text={'You lose'}
                        buttonText={'Play again!'}
                        clicked={onClickPlayAgain}
                    />
                ) : showModel === 'error' ? (
                    <Model
                        text={'Please select a number '}
                        buttonText={'OK!'}
                        clicked={() => setShowModel('')}
                    />
                ) : showModel === 'fillAll' ? (
                    <Model
                        text={'Please fill all numbers '}
                        buttonText={'OK!'}
                        clicked={() => setShowModel('')}
                    />
                ) : showModel === 'showRules' ? (
                    <Model
                        text={
                            'Try to guess the pattern, in both order and numbers, within ten turns. After submitting a row, a small black peg is placed for each code peg from the guess which is correct in both number and position. A white peg indicates the existence of a correct number peg placed in the wrong position. A red peg indicates the non existence of a correct number placed in the position'
                        }
                        link={
                            'https://en.wikipedia.org/wiki/Mastermind_(board_game)'
                        }
                        buttonText={'OK!'}
                        clicked={() => setShowModel('')}
                    />
                ) : null
            ) : null}
        </div>
    )
}

export default Layout
