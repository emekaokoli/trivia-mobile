import React from 'react';

export default function useCorrectAnswer(questions, questionsReponse) {
  const correctAnswer = React.useMemo(() => {
    let correct = 0;
    questions.map((question, index) => {
      if (questionsReponse[index].answer === question.correct_answer) {
        return (correct += 1);
      }
      return null;
    });
    return correct;
  }, [questions, questionsReponse]);

  return correctAnswer;
}
