export const replaceItemFromArr = (arr, idx, value) => {
  return [...arr.slice(0, idx), value, ...arr.slice(idx + 1)];
};

export const generateChecker = (correctAnswer, currentSelectedNumber) => {
  if (currentSelectedNumber[0] === "") return null;

  const answer = [];
  const correctAnswerObj = {};
  correctAnswer.forEach((num) => {
    correctAnswerObj[num] ??= 0;
    correctAnswerObj[num]++;
  });

  currentSelectedNumber.forEach((num, idx) => {
    if (num === correctAnswer[idx]) {
      correctAnswerObj[num] -= 1;
      answer.push("exact");
    }
  });

  currentSelectedNumber.forEach((num, idx) => {
    if (num === correctAnswer[idx]) {
      return;
    } else if (!correctAnswer.includes(num) || correctAnswerObj[num] <= 0) {
      answer.push("not-contain");
    } else {
      correctAnswerObj[num] -= 1;
      answer.push("contain");
    }
  });

  return answer;
};
