import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

import { LoadingScreen } from './LoadingScreen';

export default function CardScreen({ handleAnswer }) {
  

  const { question, nextQuestion, currentQuestion, isloading, error } =
    useSelector((state) => ({
      question: state.questions,
      nextQuestion: state.nextQuestion,
      currentQuestion: state.currentQuestion,
      isloading: state.isloading,
      error: state.error,
    }));

  if (isloading) {
    return (
      <View>
        <Text>
          <LoadingScreen />
        </Text>
      </View>
    );
  };

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container} key={1}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{question.category}</Text>
      </View>
      <View style={styles.questions}>
        <Text style={styles.questionsText}>{question.question}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAnswer(nextQuestion.correct_answer)}
        >
          <Text style={styles.texts}>True</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            handleAnswer(nextQuestion.incorrect_answers[0])
          }
        >
          <Text style={styles.texts}>False</Text>
        </TouchableOpacity>
      </View>
      <Text>
        {currentQuestion} of {question.length}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: -1,
    height: 450,
    width: 400,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 5,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
    margin: 20,
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  header: {
    flex: 2,
    alignItems: 'center',
    margin: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  questions: {
    flex: 3,
  },
  // fontWeight: 'bold',
  questionsText: {
    fontSize: 20,
    margin: 25,
  },
  texts: {
    color: '#fff',
    fontSize: 20,
  },
  buttonContainer: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  questionsGroup: {
    // maxWidth: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
