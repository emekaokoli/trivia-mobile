import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
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
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>You scored</Text>
          <Text style={styles.headerText}>
            {correctAnswer} out of {totalQuestions}
          </Text>
        </View>

        <View style={styles.questionsContainer}>
          <Text style={styles.questiontText}>
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
        </View>
      </ScrollView>
    </SafeAreaView>
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
    height: 450,
    width: 400,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    shadowOffset: { height: 1, width: 1 },
    elevation: 5,
    margin: 20,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOpacity: 1,
    shadowRadius: 1,
    flexWrap: 'wrap',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  questionsContainer: {
    margin: 20,
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  questiontText: {
    fontSize: 20,
    margin: 25,
  },
  ButtonText: {
    fontSize: 20,
    color: '#fff',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    width: 150,
    height: 50,
    margin: 10,
    borderRadius: 5,
    shadowOffset: { height: 1, width: 1 },
    elevation: 5,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
