import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GameContext } from '../context/GameContext';
import ChoiceButton from '../components/ChoiceButton';
import ResultModal from '../components/ResultModal';

const choices = ['Rock', 'Paper', 'Scissors'];

const GameScreen = ({ navigation }) => {
  const { playerChoice, setPlayerChoice, computerChoice, setComputerChoice, result, setResult } = useContext(GameContext);

  const playGame = (choice) => {
    setPlayerChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("It's a Tie!");
    } else if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      setResult('You Win!');
    } else {
      setResult('You Lose!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your move</Text>
      <View style={styles.choices}>
        {choices.map((choice) => (
          <ChoiceButton key={choice} choice={choice} onPress={() => playGame(choice)} />
        ))}
      </View>
      <ResultModal playerChoice={playerChoice} computerChoice={computerChoice} result={result} />
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5dc' },
  title: { fontSize: 30, fontWeight: 'bold', color: '#333', marginBottom: 20 },
  choices: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  homeButton: { marginTop: 100, backgroundColor: '#ff4500', padding: 20, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 4 },
  homeButtonText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
});

export default GameScreen;