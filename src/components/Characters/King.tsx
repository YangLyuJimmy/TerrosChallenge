import React from 'react';
import { View, StyleSheet } from 'react-native';

interface KingProps {
  color: 'white' | 'black';
  position: {
    row: number;
    col: number;
  };
  onMove: (newPosition: {row: number; col: number}) => void;
}

const King: React.FC<KingProps> = ({ color, position, onMove }) => {
  const isValidMove = (newRow: number, newCol: number): boolean => {
    // King can move one square in any direction
    const rowDiff = Math.abs(newRow - position.row);
    const colDiff = Math.abs(newCol - position.col);
    
    // Check if move is one square in any direction
    return (rowDiff <= 1 && colDiff <= 1) && !(rowDiff === 0 && colDiff === 0);
  };

  const handleMove = (newRow: number, newCol: number) => {
    if (isValidMove(newRow, newCol)) {
      onMove({ row: newRow, col: newCol });
    }
  };

  return (
    <View style={[styles.king, { backgroundColor: color }]}>
      <View style={[styles.crown, { borderColor: color === 'white' ? '#000' : '#fff' }]} />
      <View style={[styles.cross, { backgroundColor: color === 'white' ? '#000' : '#fff' }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  king: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  crown: {
    width: 24,
    height: 12,
    borderTopWidth: 6,
    borderLeftWidth: 2,
    borderRightWidth: 2,
  },
  cross: {
    width: 4,
    height: 12,
    position: 'absolute',
    top: '40%',
  },
});

export default King;
