import React, { Component } from 'react'
import Matrix from './components/Matrix'
import AppModal from './components/AppModal'
import { cloneMatrix } from './assets/utils'

class App extends Component {
  state = {
    matrix: [
      [1, 0, 0, 1, 1],
      [0, 0, 1, 1, 0],
      [1, 0, 1, 0, 1]
    ],
    selectedNums: [],
    prevMatrix: [],
    showModal: false,
    shouldUpdatePrevMatrix: false
  }

  setSelectedNums = selectedNums =>
    this.setState({ selectedNums })

  mouseUpHandler = () => {
    const showModal = true
    const shouldUpdatePrevMatrix = true
    this.setState({ showModal, shouldUpdatePrevMatrix })
  }

  checkboxHandler = el => {
    const matrix = cloneMatrix(this.state.matrix)
    const prevMatrix = cloneMatrix(matrix)
    if (this.state.shouldUpdatePrevMatrix) {
      const shouldUpdatePrevMatrix = false
      this.setState({ prevMatrix, shouldUpdatePrevMatrix })
    }
    matrix[el[0]][el[1]] = matrix[el[0]][el[1]] === 0 ? 1 : 0
    this.setState({ matrix })
  }

  cancelHandler = () => {
    const matrix = cloneMatrix(this.state.prevMatrix)
    const prevMatrix = cloneMatrix(this.state.matrix)
    const showModal = false
    this.setState({ matrix, prevMatrix, showModal })
  }

  updateMatrix = () =>
    this.setState({ showModal: false })

  render() {
    return (
      <div className="App">
        <Matrix
          matrix={ this.state.matrix }
          setSelectedNums={ this.setSelectedNums }
          mouseUpHandler={ this.mouseUpHandler }
        />
        <AppModal
          show={ this.state.showModal }
          selectedNums={ this.state.selectedNums }
          matrix={ this.state.matrix }
          onCancel={ this.cancelHandler }
          checkboxHandler={ el => this.checkboxHandler(el) }
          onConfirm={ this.updateMatrix }
        />
      </div>
    );
  }
}

export default App;
