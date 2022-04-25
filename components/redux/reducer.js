import * as ActionTypes from '../redux/ActionTypes';
const initialState = {
  isLoading: true,
  errMess: null,
  questions: [],
  nextQuestion: {},
  currentQuestion: 0,
};
export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INITIAL_FETCH: {
      return {
        ...state,
        isLoading: true,
        errMess: null,
        questions: [action.payload, ...state.questions],
      };
    }

    case ActionTypes.NEXT_QUESTION_INDEX: {
      return {
        ...state,
        currentQuestion: action.payload,
      };
    }

    case ActionTypes.GET_NEXT_QUESTION: {
      const data = state.questions[0][action.payload];

      return {
        ...state,
        errMess: null,
        isLoading: false,
        nextQuestion: { ...data },
      };
    }

    case ActionTypes.QUESTIONS_LOADING: {
      return {
        ...state,
        isLoading: true,
        errMess: null,
        questions: [],
      };
    }

    case ActionTypes.FETCH_FAILED: {
      return { ...state, isLoading: false, errMess: action.payload };
    }

    case ActionTypes.RESET_ANSWERS: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
};
