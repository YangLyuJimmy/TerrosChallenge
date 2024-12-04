import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import King from './Characters/King';
import Queen from './Characters/Queen';
import Rook from './Characters/Rook';
import Bishop from './Characters/Bishop';
import Knight from './Characters/Knight';
import Pawn from './Characters/Pawns';

const ChessBoard = ({ pieces, onMove }) => {
  
  const squares = Array(8).fill(null).map((_, row) => 
    Array(8).fill(null).map((_, col) => {
      const piece = pieces.find(piece => piece.position.row === row && piece.position.col === col);
      return {
        row,
        col,
        isLight: (row + col) % 2 === 0,
        piece: piece || null
      };
    })
  );

  const renderPiece = (piece) => {
    switch (piece.type) {
      case 'King':
        return <King color={piece.color} position={piece.position} onMove={onMove} />;
      case 'Queen':
        return <Queen color={piece.color} position={piece.position} onMove={onMove} />;
      case 'Rook':
        return <Rook color={piece.color} position={piece.position} onMove={onMove} />;
      case 'Bishop':
        return <Bishop color={piece.color} position={piece.position} onMove={onMove} />;
      case 'Knight':
        return <Knight color={piece.color} position={piece.position} onMove={onMove} />;
      case 'Pawn':
        return <Pawn color={piece.color} position={piece.position} onMove={onMove} />;
      default:
        return null;
    }
  };

  const [selectedPiece, setSelectedPiece] = useState(null);

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
              onTouchEnd={() => {
                if (selectedPiece) {
                  // Move the selected piece to the target square
                  onMove(selectedPiece, square.position);
                  setSelectedPiece(null); // Deselect the piece after moving
                } else if (square.piece) {
                  // Select the piece if it's not already selected
                  setSelectedPiece(square.piece);
                }
              }}
            >
              {square.piece && renderPiece(square.piece)}
            </View>
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


