import { useState } from 'react';
import '../css/Fretboard.css'

function Fretboard() {
  const rows = 6;
  const columns = 24;

  const [highlightedDivs, setHighlighted] = useState({});




  const createGrid = () => {
    const grid = [];
    for (let row = 0; row < rows; row++) {
      const rowDivs = [];
      for (let col = 0; col < columns; col++) {
        rowDivs.push(<div key={`${row}-${col}`} className="grid-item"></div>);
      }
      grid.push(
        <div key={row} className="grid-row">
          {rowDivs}
        </div>
      );
    }
    return grid;
  };

  return <div className="grid-container">{createGrid()}</div>;
}

export default Fretboard;