import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultModal = ({ playerChoice, computerChoice, result }) => {
  if (!playerChoice) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{result}</Text>
      <Text>Player: {playerChoice}</Text>
      <Text>Computer: {computerChoice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 90, alignItems: 'center' },
  resultText: { fontSize: 64, fontWeight: 'bold', marginBottom: 10 },
});

export default ResultModal;
