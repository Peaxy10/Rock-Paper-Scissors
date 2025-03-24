import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ChoiceButton = ({ choice, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{choice}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { backgroundColor: '#fb9b27', padding: 15, margin: 10, borderRadius: 5 },
  text: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default ChoiceButton;
