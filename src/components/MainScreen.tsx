import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ChessBoard from './ChessBoard';

const MainScreen = () => {
  const [currentTurn, setCurrentTurn] = useState('white');
  const [pieces, setPieces] = useState([
    { type: 'Rook', color: 'white', position: { row: 0, col: 0 } },
    { type: 'Knight', color: 'white', position: { row: 0, col: 1 } },
    { type: 'Bishop', color: 'white', position: { row: 0, col: 2 } },
    { type: 'Queen', color: 'white', position: { row: 0, col: 3 } },
    { type: 'King', color: 'white', position: { row: 0, col: 4 } },
    { type: 'Bishop', color: 'white', position: { row: 0, col: 5 } },
    { type: 'Knight', color: 'white', position: { row: 0, col: 6 } },
    { type: 'Rook', color: 'white', position: { row: 0, col: 7 } },
    { type: 'Pawn', color: 'white', position: { row: 1, col: 0 } },
    { type: 'Pawn', color: 'white', position: { row: 1, col: 1 } },
    { type: 'Pawn', color: 'white', position: { row: 1, col: 2 } },
    { type: 'Pawn', color: 'white', position: { row: 1, col: 3 } },
    { type: 'Pawn', color: 'white', position: { row: 1, col: 4 } },
    { type: 'Pawn', color: 'white', position: { row: 1, col: 5 } },
    { type: 'Pawn', color: 'white', position: { row: 1, col: 6 } },
    { type: 'Pawn', color: 'white', position: { row: 1, col: 7 } },
    
    { type: 'Rook', color: 'black', position: { row: 7, col: 0 } },
    { type: 'Knight', color: 'black', position: { row: 7, col: 1 } },
    { type: 'Bishop', color: 'black', position: { row: 7, col: 2 } },
    { type: 'Queen', color: 'black', position: { row: 7, col: 3 } },
    { type: 'King', color: 'black', position: { row: 7, col: 4 } },
    { type: 'Bishop', color: 'black', position: { row: 7, col: 5 } },
    { type: 'Knight', color: 'black', position: { row: 7, col: 6 } },
    { type: 'Rook', color: 'black', position: { row: 7, col: 7 } },
    { type: 'Pawn', color: 'black', position: { row: 6, col: 0 } },
    { type: 'Pawn', color: 'black', position: { row: 6, col: 1 } },
    { type: 'Pawn', color: 'black', position: { row: 6, col: 2 } },
    { type: 'Pawn', color: 'black', position: { row: 6, col: 3 } },
    { type: 'Pawn', color: 'black', position: { row: 6, col: 4 } },
    { type: 'Pawn', color: 'black', position: { row: 6, col: 5 } },
    { type: 'Pawn', color: 'black', position: { row: 6, col: 6 } },
    { type: 'Pawn', color: 'black', position: { row: 6, col: 7 } },
  ]);

  const handleMove = (piece, targetPosition) => {
    // Update the position of the piece
    setPieces(prevPieces => 
      prevPieces.map(p => 
        p === piece ? { ...p, position: targetPosition } : p
      )
    );
    // Switch turns
    setCurrentTurn(currentTurn === 'white' ? 'black' : 'white');
  };

  const resetGame = () => {
    setCurrentTurn('white');
    setPieces([
      { type: 'Rook', color: 'white', position: { row: 0, col: 0 } },
      { type: 'Knight', color: 'white', position: { row: 0, col: 1 } },
      { type: 'Bishop', color: 'white', position: { row: 0, col: 2 } },
      { type: 'Queen', color: 'white', position: { row: 0, col: 3 } },
      { type: 'King', color: 'white', position: { row: 0, col: 4 } },
      { type: 'Bishop', color: 'white', position: { row: 0, col: 5 } },
      { type: 'Knight', color: 'white', position: { row: 0, col: 6 } },
      { type: 'Rook', color: 'white', position: { row: 0, col: 7 } },
      { type: 'Pawn', color: 'white', position: { row: 1, col: 0 } },
      { type: 'Pawn', color: 'white', position: { row: 1, col: 1 } },
      { type: 'Pawn', color: 'white', position: { row: 1, col: 2 } },
      { type: 'Pawn', color: 'white', position: { row: 1, col: 3 } },
      { type: 'Pawn', color: 'white', position: { row: 1, col: 4 } },
      { type: 'Pawn', color: 'white', position: { row: 1, col: 5 } },
      { type: 'Pawn', color: 'white', position: { row: 1, col: 6 } },
      { type: 'Pawn', color: 'white', position: { row: 1, col: 7 } },
      
      { type: 'Rook', color: 'black', position: { row: 7, col: 0 } },
      { type: 'Knight', color: 'black', position: { row: 7, col: 1 } },
      { type: 'Bishop', color: 'black', position: { row: 7, col: 2 } },
      { type: 'Queen', color: 'black', position: { row: 7, col: 3 } },
      { type: 'King', color: 'black', position: { row: 7, col: 4 } },
      { type: 'Bishop', color: 'black', position: { row: 7, col: 5 } },
      { type: 'Knight', color: 'black', position: { row: 7, col: 6 } },
      { type: 'Rook', color: 'black', position: { row: 7, col: 7 } },
      { type: 'Pawn', color: 'black', position: { row: 6, col: 0 } },
      { type: 'Pawn', color: 'black', position: { row: 6, col: 1 } },
      { type: 'Pawn', color: 'black', position: { row: 6, col: 2 } },
      { type: 'Pawn', color: 'black', position: { row: 6, col: 3 } },
      { type: 'Pawn', color: 'black', position: { row: 6, col: 4 } },
      { type: 'Pawn', color: 'black', position: { row: 6, col: 5 } },
      { type: 'Pawn', color: 'black', position: { row: 6, col: 6 } },
      { type: 'Pawn', color: 'black', position: { row: 6, col: 7 } },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chess Game</Text>
      
      <Text style={styles.turnIndicator}>
        Current Turn: {currentTurn.charAt(0).toUpperCase() + currentTurn.slice(1)}
      </Text>

      <ChessBoard pieces={pieces} onMove={handleMove} />

      <TouchableOpacity
        style={styles.resetButton}
        onPress={resetGame}
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
