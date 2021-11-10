import _ from 'lodash'
import React, { useState } from 'react'
import Holders from './holders/holders'
import AnswerHolders from '../components/AnswerHolders/AnswerHolders'
import Button from '../components/UI/Button'
import classes from './Layout.module.css'
import { displayModel } from './displayModel'

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

    const [counter, setCounter] = useState(1)
    const [showModel, setShowModel] = useState('')

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
        setShowModel('')
        window.location.reload(false)
    }

    const closeModel = () => [setShowModel('')]

    const model = displayModel(showModel, onClickPlayAgain, closeModel)

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
            <h1 className={classes.title}>Master Mind</h1>
            <Button text="Show Rules" clicked={onClickShowRuleHandler} />
            <h3 className={`${classes.title} ${classes.text}`}>
                Current Selected Number :{' '}
                <span
                    style={{ backgroundColor: `var(--color${classes.number})` }}
                    className={classes.number}>
                    {selectedNumber}
                </span>
            </h3>

            <Holders
                numbers={[1, 2, 3, 4, 5, 6]}
                onClickInputNumber={onClickInputNumber}
                answer={false}
                selectedNumber={selectedNumber}
            />

            {answerHolders}
            {model}
        </div>
    )
}

export default Layout
