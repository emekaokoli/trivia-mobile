import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export const LoadingScreen = () => {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size='large' color='#87ceeb' />
      <Text style={styles.loadingText}>Loading . . .</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  loadingView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loadingText: {
    color: '#87ceeb',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
