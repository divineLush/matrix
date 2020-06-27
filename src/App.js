import React, { Component } from 'react'
import Matrix from './components/Matrix'

class App extends Component {
  state = {
    matrix: [
      [1, 0, 0, 1, 1],
      [0, 0, 1, 1, 0],
      [1, 0, 1, 0, 1]
    ],
    selectedNums: []
  }

  setSelectedNums = selectedNums =>
    this.setState({ selectedNums })

  render() {
    return (
      <div className="App">
        <Matrix matrix={ this.state.matrix } setSelectedNums={ this.setSelectedNums } />
      </div>
    );
  }
}

export default App;
