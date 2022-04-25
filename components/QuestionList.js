import React from 'react';
import Proptypes from 'proptypes';
import { useSelector } from 'react-redux';
import { ListItem } from 'react-native-elements';

export default function QuestionList() {
  const { questionsReponse } = useSelector((state) => ({
    questionsReponse: state.questionsReponse,
  }));

  const questionlist = questionsReponse?.map((data) => {
    const { question, correct_answer } = data.Question;
    const { answer, id } = data;
    return (
      <ListGroup className='question' key={id} variant='flush'>
        <br />
        {correct_answer === answer ? (
          <ListGroup.Item as='li' className='icons text-left'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-check-circle text-success text-left'
              viewBox='0 0 16 16'
            >
              <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
              <path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z' />
            </svg>
          </ListGroup.Item>
        ) : (
          <ListGroup.Item as='li' className='icons text-left'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-hand-thumbs-down-fill text-danger'
              viewBox='0 0 16 16'
            >
              <path d='M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z' />
            </svg>
          </ListGroup.Item>
        )}
        {question}
      </ListGroup>
    );
  });
  return <>{questionlist}</>;
}
QuestionList.propTypes = {
  questionsReponse: Proptypes.arrayOf(
    Proptypes.objectOf(Proptypes.string)
  ),
};
