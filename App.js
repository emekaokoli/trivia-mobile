import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { AppNavigator } from './components/AppNavigator';
import configureStore from './components/redux/configureStore';
import { LoadingScreen } from './components/Screens/LoadingScreen';

export default function App() {
  const { store, persistor } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <SafeAreaProvider>
          <View style={styles.container}>
            <StatusBar style='auto' />
            <AppNavigator />
          </View>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
