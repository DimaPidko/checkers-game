import React from 'react'
// import { useState } from 'react'

const map: Array<Array<number>> = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
]

const checkers: Array<Array<number | null>> = [
  [null, 0, null, 0, null, 0, null, 0],
  [0, null, 0, null, 0, null, 0, null],
  [null, 0, null, 0, null, 0, null, 0],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [1, null, 1, null, 1, null, 1, null],
  [null, 1, null, 1, null, 1, null, 1],
  [1, null, 1, null, 1, null, 1, null],
]
const App: React.FC = () => {
  
  const renderMap = (map: Array<Array<number>>, checkers: Array<Array<number | null>>) => {
    return map.map((row, rowIndex) => (
      <div key={rowIndex} style={{ display: 'flex'}}>
        {row.map((cells, cellsIndex) => (
          <div key={cellsIndex} style={{ width: '40px', height: '40px', background: cells === 0 ? 'white' : 'black', position: 'relative'}}>
            {checkers[rowIndex][cellsIndex] !== null && (
              <div style={{width: '30px', height: '30px', borderRadius: '50%', backgroundColor: checkers[rowIndex][cellsIndex] === 0 ? 'red' : 'blue', position: 'absolute', top: '5px', left: '5px'}}>
              
              </div>
            )}
          </div>
        ))}
      </div>
    ))
  }
  
  return (
    <section>
      {renderMap(map, checkers)}
    </section>
  )
}

export default App
