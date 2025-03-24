import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/R.P.S.png')} style={styles.logo} />
      <Text style={styles.title}>Rock, Paper, Scissors</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game')}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f8ff' },
  logo: { width: 300, height: 300, marginBottom: 20, resizeMode: 'contain' },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  button: { backgroundColor: '#ff4500', padding: 15, margin: 10, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 4 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default HomeScreen;
