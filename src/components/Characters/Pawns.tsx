import React from 'react';
import { View, StyleSheet } from 'react-native';

interface PawnProps {
  color: 'white' | 'black';
  position: {
    row: number;
    col: number;
  };
  onMove: (newPosition: {row: number; col: number}) => void;
}

const Pawn: React.FC<PawnProps> = ({ color, position, onMove }) => {
  const isValidMove = (newRow: number, newCol: number): boolean => {
    const rowDiff = newRow - position.row;
    const colDiff = Math.abs(newCol - position.col);
    
    // White pawns move up (negative row diff), black pawns move down (positive row diff)
    const direction = color === 'white' ? -1 : 1;
    
    // Basic forward movement
    const isForwardOne = rowDiff === direction && colDiff === 0;
    
    // First move can be two squares
    const isFirstMove = (color === 'white' && position.row === 6) || 
                       (color === 'black' && position.row === 1);
    const isForwardTwo = isFirstMove && 
                        rowDiff === (2 * direction) && 
                        colDiff === 0;
    
    // Diagonal capture (would need board state to check if enemy piece present)
    const isDiagonalCapture = rowDiff === direction && colDiff === 1;
    
    return isForwardOne || isForwardTwo || isDiagonalCapture;
  };

  const handleMove = (newRow: number, newCol: number) => {
    if (isValidMove(newRow, newCol)) {
      // Check for promotion (reaching the opposite end)
      const isPromotion = (color === 'white' && newRow === 0) ||
                         (color === 'black' && newRow === 7);
      
      onMove({ row: newRow, col: newCol });
      
      // Promotion logic would go here
      if (isPromotion) {
        // Could trigger a modal or callback to handle promotion
        console.log('Pawn promotion!');
      }
    }
  };

  return (
    <View style={[styles.pawn, { backgroundColor: color }]}>
      <View style={styles.head} />
      <View style={styles.body} />
    </View>
  );
};

const styles = StyleSheet.create({
  pawn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  head: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    position: 'absolute',
    top: '35%',
  },
  body: {
    width: 14,
    height: 16,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: '35%',
  },
});

export default Pawn;
