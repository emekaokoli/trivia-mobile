import axios from 'axios';
import { BASE_URL } from '../constants/api';
import * as ActionTypes from '../redux/ActionTypes';

// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }
export const fetchData = () => {
  return async (dispatch) => {
    dispatch(questionsLoading());
    try {
      const response = await axios.get(BASE_URL);
      const result = response.data.results;

      dispatch(InitialFetch(result));
    } catch (error) {
      dispatch(questionsFailed(error));
    }
  };
};
export const InitialFetch = (data) => ({
  type: ActionTypes.INITIAL_FETCH,
  payload: data,
});
export const nextQuestionIndex = (index) => ({
  type: ActionTypes.NEXT_QUESTION_INDEX,
  payload: index,
});
export const getNextQuestion = (nextQuestion) => ({
  type: ActionTypes.GET_NEXT_QUESTION,
  payload: nextQuestion,
});

export const questionsLoading = () => ({
  type: ActionTypes.QUESTIONS_LOADING,
});

export const questionsFailed = (error) => ({
  type: ActionTypes.FETCH_FAILED,
  payload: error,
});

export const resetQuiz = () => ({
  type: ActionTypes.RESET_ANSWERS,
});

export const correctAnswers = (correctanswer) => ({
  type: ActionTypes.CORRECT_ANSWERS,
  payload: { correctanswer },
});
