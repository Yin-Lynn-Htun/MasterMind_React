import _ from 'lodash';
import React, { useState } from 'react';
import Holders from './holders/holders';

const Layout = (props) => {
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [answerNumber, setAnswerNumber] = useState(['', '', '', '']);
    const [checkNumber, setCheckNumber] = useState(null);

    const onClickInputNumber = (num) => {
        setSelectedNumber(num);
    };

    const onClickAnswerNumber = (index) => {
        const answer = answerNumber.slice();
        answer.splice(index, 1, selectedNumber);
        setAnswerNumber(answer);
    };

    const onCheckAnswer = () => {
        const answer = {
            exact: 0,
            contain: 0,
        };

        props.correctAnswer.forEach((num, index) => {
            if (num === answerNumber[index]) {
                answer.exact += 1;
            }
        });

        let count = 0;
        const tempAnswer = _.countBy(answerNumber);
        const tempCorrect = _.countBy(props.correctAnswer);
        for (let key in tempCorrect) {
            count += Math.min(tempAnswer[key], tempCorrect[key])
                ? Math.min(tempAnswer[key], tempCorrect[key])
                : 0;
        }

        answer.contain = count - answer.exact;
        setCheckNumber(answer);

        if (answer.exact === 4) {
            alert('Congratulation! You got the correct answer');
        }
    };

    return (
        <div>
            <h3>Current Selected Number : {selectedNumber}</h3>

            <h5>Select Number Here : </h5>
            <Holders
                numbers={[1, 2, 3, 4]}
                onClickInputNumber={onClickInputNumber}
                answer={false}
                selectedNumber={selectedNumber}
            />
            <Holders
                numbers={answerNumber}
                onClickAnswerNumber={onClickAnswerNumber}
                checkAnswer={onCheckAnswer}
                answer={true}
                checkNumber={checkNumber}
            />
        </div>
    );
};

export default Layout;
