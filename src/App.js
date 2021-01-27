import React, { Component, Fragment} from 'react';
import {elementals } from './data';
import Elemental from './components/Elemental'

class App extends Component {

  state = {
    showInfo: false,
    element: {}
  }

  showInfo = (num) => {
    this.setState({ showInfo: true, element: elementals[num]})

  }

  close = () => {
    this.setState({ showInfo: false})
  }

  render() {
    let { name, summary, symbol, category, number, source, appearance, atomic_mass, molar_heat, density, melt, boil } = this.state.element;

    return (
      <div className = "wrap">
        <h1>The Periodic Table of Elements</h1>
        <p className="">
          Created By {' '}
          <a href="chris-ashman.com" target="_blank">
            Chris Ashman
          </a>{' '}
          /{' '}
          <a href="#" target="_blank">
            Check out the Source Code
          </a>
        </p>

        <div id="period_table">
          <Elemental showInfo={this.showInfo} num="1" />
          <Elemental showInfo={this.showInfo} num="2" />
          <Elemental showInfo={this.showInfo} num="3" />
          <Elemental showInfo={this.showInfo} num="4" />

        </div>
      </div>
    )
  }

}

export default App