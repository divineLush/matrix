import React, { Component } from 'react'
import Matrix from './components/Matrix'

class App extends Component {
  state = {
    matrix: [
      [1, 0, 0, 1, 1],
      [0, 0, 1, 1, 0],
      [1, 0, 1, 0, 1]
    ]
  }

  render() {
    return (
      <div className="App">
        <Matrix matrix={ this.state.matrix } />
      </div>
    );
  }
}

export default App;
