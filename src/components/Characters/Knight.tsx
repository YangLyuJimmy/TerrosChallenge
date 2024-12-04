import React from 'react';
import { View, StyleSheet } from 'react-native';

interface KnightProps {
  color: 'white' | 'black';
  position: {
    row: number;
    col: number;
  };
  onMove: (newPosition: {row: number; col: number}) => void;
  board: Array<Array<{type: string; color: string} | null>>;
}

const Knight: React.FC<KnightProps> = ({ color, position, onMove, board }) => {
  const isValidMove = (newRow: number, newCol: number): boolean => {
    // Knight moves in L-shape: 2 squares in one direction and 1 square perpendicular
    const rowDiff = Math.abs(newRow - position.row);
    const colDiff = Math.abs(newCol - position.col);
    
    // Basic L-shape movement check
    const isLShapeMove = (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
    
    // No need to check path since knight can jump over pieces
    return isLShapeMove;
  };

  return (
    <View style={[styles.knight, { backgroundColor: color }]}>
      <View style={styles.head} />
      <View style={styles.neck} />
    </View>
  );
};

const styles = StyleSheet.create({
  knight: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  head: {
    width: 14,
    height: 18,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 4,
    backgroundColor: '#000',
    position: 'absolute',
    top: '30%',
    transform: [{ rotate: '45deg' }]
  },
  neck: {
    width: 10,
    height: 16,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: '35%'
  }
});

export default Knight;

