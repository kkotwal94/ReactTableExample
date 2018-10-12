import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        [4, 2, 3, 4, 5, 6, 7, 8, 9],
        [2, 2, 3, 4, 5, 6, 7, 8, 9],
        [3, 2, 3, 4, 5, 6, 7, 8, 9],
        [2, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 2, 3, 4, 5, 6, 7, 8, 9],
        [2, 2, 3, 4, 5, 6, 7, 8, 9],
        [3, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 2, 3, 4, 5, 6, 7, 8, 9]
      ]
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        {data.map((aSudokuRow, index) => (
          <tr key={`sudokuRow-${index}`}>
            {aSudokuRow.map((aSudokuCell, cellIndex) => (
              <td key={`sudokuCell-${cellIndex}`}>{aSudokuCell}</td>
            ))}
          </tr>
        ))}
      </div>
    );
  }
}

export default App;
