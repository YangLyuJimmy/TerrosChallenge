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
  const isValidMove = (newRow: number, newCol: number) => {
    const rowDiff = Math.abs(newRow - position.row);
    const colDiff = Math.abs(newCol - position.col);

    return (
      (rowDiff === 0 || colDiff === 0) && // horizontal or vertical only
      !(rowDiff === 0 && colDiff === 0) // not staying in place
    );
  };

  const handleMove = (newRow: number, newCol: number) => {
    if (isValidMove(newRow, newCol)) {
      onMove({ row: newRow, col: newCol });
    }
  };

  return (
    <View style={[styles.rook, { backgroundColor: color }]}>
      <View style={styles.top}>
        <View style={[styles.battlement, { backgroundColor: color === 'white' ? '#000' : '#fff' }]} />
        <View style={[styles.battlement, { backgroundColor: color === 'white' ? '#000' : '#fff' }]} />
        <View style={[styles.battlement, { backgroundColor: color === 'white' ? '#000' : '#fff' }]} />
      </View>
      <View style={[styles.base, { backgroundColor: color === 'white' ? '#000' : '#fff' }]} />
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
  top: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    position: 'absolute',
    top: '25%',
  },
  battlement: {
    width: 8,
    height: 12,
    backgroundColor: '#000',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  base: {
    width: 20,
    height: 20,
    backgroundColor: '#000',
    borderRadius: 4,
    position: 'absolute',
    bottom: '25%',
  },
});

export default Rook;
