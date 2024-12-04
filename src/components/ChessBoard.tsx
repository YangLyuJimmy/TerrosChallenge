import React from 'react';
import {View, StyleSheet} from 'react-native';

const ChessBoard = () => {
  
  const squares = Array(8).fill(null).map((_, row) => 
    Array(8).fill(null).map((_, col) => ({
      row,
      col,
      isLight: (row + col) % 2 === 0
    }))
  );

  return (
    <View style={styles.board}>
      {squares.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((square, colIndex) => (
            <View
              key={`${rowIndex}-${colIndex}`}
              style={[
                styles.square,
                {backgroundColor: square.isLight ? '#F0D9B5' : '#B58863'}
              ]}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    width: '100%',
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: '#444444',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  square: {
    flex: 1,
  },
});

export default ChessBoard;


