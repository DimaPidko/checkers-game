import React from 'react';

const map: Array<Array<number>> = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
];

const checkers: Array<Array<number | null>> = [
  [null, 0, null, 0, null, 0, null, 0],
  [0, null, 0, null, 0, null, 0, null],
  [null, 0, null, 0, null, 0, null, 0],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [1, null, 1, null, 1, null, 1, null],
  [null, 1, null, 1, null, 1, null, 1],
  [1, null, 1, null, 1, null, 1, null],
];

const App: React.FC = () => {
  const handleCheckerClick = (rowIndex: number, cellIndex: number) => {
    console.log(`Checker clicked at row ${rowIndex}, cell ${cellIndex}`);
  };
  
  const renderMap = (map: Array<Array<number>>, checkers: Array<Array<number | null>>) => {
    return map.map((row, rowIndex) => (
      <div key={rowIndex} style={{ display: 'flex' }}>
        {row.map((cell, cellIndex) => (
          <div
            key={cellIndex}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: cell === 0 ? 'white' : 'black',
              position: 'relative',
            }}
          >
            {checkers[rowIndex][cellIndex] !== null && (
              <button
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: checkers[rowIndex][cellIndex] === 0 ? 'red' : 'blue',
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                }}
                onClick={() => handleCheckerClick(rowIndex, cellIndex)}
              ></button>
            )}
          </div>
        ))}
      </div>
    ));
  };
  
  return <section>{renderMap(map, checkers)}</section>;
};

export default App;
