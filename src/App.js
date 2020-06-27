import React, { Component } from 'react'
import Matrix from './components/Matrix'
import AppModal from './components/AppModal'
import { calcMatrixElCoords } from './assets/utils'

class App extends Component {
  state = {
    matrix: [
      [1, 0, 0, 1, 1],
      [0, 0, 1, 1, 0],
      [1, 0, 1, 0, 1]
    ],
    selectedNums: [],
    showModal: false
  }

  setSelectedNums = selectedNums =>
    this.setState({ selectedNums })

  mouseUpHandler = () => {
    this.setState({ showModal: true })
  }

  render() {
    return (
      <div className="App">
        <Matrix
          matrix={ this.state.matrix }
          setSelectedNums={ this.setSelectedNums }
          mouseUpHandler = { this.mouseUpHandler }
        />
        <AppModal
          show={ this.state.showModal }
          onCancel={ () => this.setState({ showModal: false }) }
        />
      </div>
    );
  }
}

export default App;
