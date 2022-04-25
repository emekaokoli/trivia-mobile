import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { resetQuiz } from '../redux/quiz.redux.slice';
import useCorrectAnswer from '../utils/useCorrectAnswer';
import QuestionList from '../QuestionList';

export default function Score({ navigation }) {
  const dispatch = useDispatch();

  const { questions, questionsReponse } = useSelector((state) => ({
    questions: state.questions,
    questionsReponse: state.questionsReponse,
  }));

  const correctAnswer = useCorrectAnswer(questions, questionsReponse);
  const totalQuestions = questions?.length || 10;

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.scoreText}>You Scored</Text>
      <Text style={styles.answersLength}>
        {correctAnswer} {' / '} {totalQuestions}
      </Text>

      <View style={styles.TFtexts}>
        <Text style={styles.TFtexts}>
          <QuestionList />
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home'), dispatch(resetQuiz());
          }}
        >
          <Text style={styles.ButtonText}>Play again?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate.reset()}
        >
          <Text style={styles.ButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </SafeAreaView>
  );
}
Score.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.string),
  questionsReponse: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string)
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: -1,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 450,
    width: 400,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
    margin: 20,
  },
  TFtexts: {
    flex: 1,
    color: '#000',
    fontSize: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    padding: 10,
    height: 40,
    width: '40%',
    margin: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    // flex: -3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  scoreText: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#000',
    fontSize: 22,
    margin: 30,
  },
  answersLength: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
  },
});
