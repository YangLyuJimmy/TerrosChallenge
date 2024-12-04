import React from 'react';
import { View, StyleSheet } from 'react-native';

interface QueenProps {
  color: 'white' | 'black';
  position: {
    row: number;
    col: number;
  };
  onMove: (newPosition: {row: number; col: number}) => void;
}

const Queen: React.FC<QueenProps> = ({ color, position, onMove }) => {
  const isValidMove = (newRow: number, newCol: number): boolean => {
    // Queen can move any number of squares horizontally, vertically, or diagonally
    const rowDiff = Math.abs(newRow - position.row);
    const colDiff = Math.abs(newCol - position.col);
    
    // Check if move is horizontal, vertical, or diagonal
    return (
      rowDiff === 0 || // horizontal
      colDiff === 0 || // vertical
      rowDiff === colDiff // diagonal
    ) && !(rowDiff === 0 && colDiff === 0); // not staying in place
  };

  const handleMove = (newRow: number, newCol: number) => {
    if (isValidMove(newRow, newCol)) {
      onMove({ row: newRow, col: newCol });
    }
  };

  return (
    <View style={[styles.queen, { backgroundColor: color }]}>
      <View style={[styles.crown, { borderColor: color === 'white' ? '#000' : '#fff' }]} />
      <View style={[styles.orb, { backgroundColor: color === 'white' ? '#000' : '#fff' }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  queen: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  crown: {
    width: 24,
    height: 14,
    borderTopWidth: 6,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  orb: {
    width: 8,
    height: 8,
    borderRadius: 4,
    position: 'absolute',
    top: '35%',
  },
});

export default Queen;
