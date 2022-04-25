import React from 'react';
import Proptypes from 'proptypes';
import { useSelector } from 'react-redux';
import { List, Colors } from 'react-native-paper';

export default function QuestionList() {
  const { questionsReponse } = useSelector((state) => ({
    questionsReponse: state.questionsReponse,
  }));

  const questionlist = questionsReponse?.map((data) => {
    const { question, correct_answer } = data.Question;
    const { answer, id } = data;
    return (
      <List.Section className='question' key={id}>
        <br />
        {correct_answer === answer ? (
          <List.Item
            title={question}
            left={() => (
              <List.Icon icon='check' color={Colors.green500} />
            )}
          />
        ) : (
          <List.Item
            title={question}
            left={() => (
              <List.Icon icon='close' color={Colors.red500} />
            )}
          />
        )}
      </List.Section>
    );
  });
  return <>{questionlist}</>;
}
QuestionList.propTypes = {
  questionsReponse: Proptypes.arrayOf(
    Proptypes.objectOf(Proptypes.string)
  ),
};
