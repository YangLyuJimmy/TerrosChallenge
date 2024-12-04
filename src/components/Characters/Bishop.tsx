import React from 'react';
import { View, StyleSheet } from 'react-native';

interface BishopProps {
  color: 'white' | 'black';
  position: {
    row: number;
    col: number;
  };
  onMove: (newPosition: {row: number; col: number}) => void;
}

const Bishop: React.FC<BishopProps> = ({ color, position, onMove }) => {
  const isValidMove = (newRow: number, newCol: number): boolean => {
    // Bishop can move diagonally
    const rowDiff = Math.abs(newRow - position.row);
    const colDiff = Math.abs(newCol - position.col);
    
    // Check if move is diagonal (row and column change must be equal)
    return rowDiff === colDiff && rowDiff > 0;
  };

  const handleMove = (newRow: number, newCol: number) => {
    if (isValidMove(newRow, newCol)) {
      onMove({ row: newRow, col: newCol });
    }
  };

  return (
    <View style={[styles.bishop, { backgroundColor: color }]}>
      <View style={styles.head} />
      <View style={styles.body} />
    </View>
  );
};

const styles = StyleSheet.create({
  bishop: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  head: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000',
    position: 'absolute',
    top: '30%',
  },
  body: {
    width: 16,
    height: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: '30%',
  },
});

export default Bishop;
