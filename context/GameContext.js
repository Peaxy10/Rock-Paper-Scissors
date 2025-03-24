import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  return (
    <GameContext.Provider value={{ playerChoice, setPlayerChoice, computerChoice, setComputerChoice, result, setResult }}>
      {children}
    </GameContext.Provider>
  );
};
