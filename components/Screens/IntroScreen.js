import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchquestions } from '../redux/quiz.redux.slice';
import { LoadingScreen } from './LoadingScreen';

const IntroScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { isloading, error } = useSelector((state) => ({
    isloading: state.isloading,
    error: state.error,
  }));

  React.useEffect(() => {
    dispatch(fetchquestions());
  }, [dispatch, fetchquestions]);

  if (isloading) return <LoadingScreen />;
  if (error) return <Text>{error}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.basetext}>
        Welcome to the trivia challenge!
      </Text>
      <Text style={styles.texts}>
        You will be presented with 10 true or false question
      </Text>
      <Text style={styles.text}>Can you score 100%?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={{ color: '#fff', fontSize: 20 }}>BEGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  basetext: {
    flex: 3,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  texts: {
    flex: 3,
    fontSize: 25,
    fontWeight: '200',
    margin: 40,
  },
  text: {
    flex: 3,
    fontSize: 25,
    fontWeight: '100',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    padding: 10,
    height: 60,
    width: '100%',
    borderRadius: 5,
  },
});
