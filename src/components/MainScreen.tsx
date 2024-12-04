import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ChessBoard from './ChessBoard';

const MainScreen = () => {
  const [currentTurn, setCurrentTurn] = useState('White');

  const handleReset = () => {
    // Reset game logic will go here
    setCurrentTurn('White');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chess Game</Text>
      
      <Text style={styles.turnIndicator}>
        Current Turn: {currentTurn}
      </Text>

      <ChessBoard />

      <TouchableOpacity
        style={styles.resetButton}
        onPress={handleReset}
      >
        <Text style={styles.resetButtonText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  turnIndicator: {
    fontSize: 18,
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: '#4A90E2',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MainScreen;
