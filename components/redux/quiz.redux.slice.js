import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../constants/api';

export const fetchquestions = createAsyncThunk(
  'questions/fetchquestions',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL);
      const { results } = await response.json();
      return results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const questions = createSlice({
  name: 'questions',
  initialState: {
    isloading: false,
    error: null,
    questions: [],
    nextQuestion: {},
    currentQuestion: 0,
    questionsReponse: [],
  },

  reducers: {
    nextQuestionIndex: (state, action) => {
      state.currentQuestion = action.payload;
    },
    getNextQuestion: (state, action) => {
      state.nextQuestion = {
        ...state.questions[action.payload],
        id: action.payload,
      };
    },
    storeQuestionResponse: (state, action) => {
      const { question, correct_answer, incorrect_answers } =
        state.nextQuestion;
      const incorrect_answer = incorrect_answers[0];
      state.questionsReponse.push({
        Question: {
          question,
          correct_answer,
          incorrect_answer,
        },
        answer: action.payload,

        id: state.currentQuestion,
      });
    },
    resetQuiz: (state) => {
      state.currentQuestion = 0;
      state.nextQuestion = {};
      state.questionsReponse = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchquestions.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(fetchquestions.fulfilled, (state, action) => {
      state.isloading = false;
      state.questions = [...action.payload];
    });
    builder.addCase(fetchquestions.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    });
  },
});

export const {
  getNextQuestion,
  nextQuestionIndex,
  resetQuiz,
  storeQuestionResponse,
} = questions.actions;
export default questions.reducer;
