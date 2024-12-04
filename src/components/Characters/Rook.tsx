import React from 'react';
import { View, StyleSheet } from 'react-native';

interface RookProps {
  color: 'white' | 'black';
  position: {
    row: number;
    col: number;
  };
  onMove: (newPosition: {row: number; col: number}) => void;
}

const Rook: React.FC<RookProps> = ({ color, position, onMove }) => {
  const isValidMove = (newRow: number, newCol: number): boolean => {
    // Rook can move horizontally or vertically
    const rowDiff = Math.abs(newRow - position.row);
    const colDiff = Math.abs(newCol - position.col);
    
    // Check if move is either horizontal or vertical but not both
    return ((rowDiff === 0 && colDiff > 0) || (colDiff === 0 && rowDiff > 0));
  };

  const handleMove = (newRow: number, newCol: number) => {
    if (isValidMove(newRow, newCol)) {
      onMove({ row: newRow, col: newCol });
    }
  };

  return (
    <View style={[styles.rook, { backgroundColor: color }]}>
      <View style={styles.tower} />
      <View style={styles.base} />
    </View>
  );
};

const styles = StyleSheet.create({
  rook: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  tower: {
    width: 20,
    height: 24,
    borderWidth: 3,
    borderColor: '#000',
    borderTopWidth: 0,
  },
  base: {
    width: 24,
    height: 4,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: '35%',
  },
});

export default Rook;
