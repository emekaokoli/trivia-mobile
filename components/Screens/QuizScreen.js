import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getNextQuestion,
  nextQuestionIndex,
  storeQuestionResponse,
} from '../redux/quiz.redux.slice';
import CardScreen from './CardScreen';
import Score from './Score';

export default function QuizScreen({ navigation }) {
  const dispatch = useDispatch();

  const { currentQuestion, nextQuestion } = useSelector((state) => ({
    currentQuestion: state.currentQuestion,
    nextQuestion: state.nextQuestion,
  }));

  useEffect(() => {
    dispatch(getNextQuestion(currentQuestion));
    dispatch(nextQuestionIndex(currentQuestion));
  }, [dispatch, currentQuestion]);

  const handleAnswer = (answer) => {
    dispatch(storeQuestionResponse(answer));
    dispatch(nextQuestionIndex(currentQuestion + 1));
    dispatch(getNextQuestion(currentQuestion + 1));
  };

  return (
    <SafeAreaView>
      {nextQuestion && currentQuestion >= 10 ? (
        <Score navigation={navigation} />
      ) : (
        <CardScreen handleAnswer={handleAnswer} />
      )}
    </SafeAreaView>
  );
}
QuizScreen.propTypes = {
  currentQuestion: PropTypes.number,
  nextQuestion: PropTypes.number,
};