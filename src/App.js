import React, { Component, Fragment} from 'react';
import { elementals } from './components/data';
import Elemental from './components/Elemental'

class App extends Component {

  state = {
    showInfo: false,
    element: {}
  }

  showInfo = (num) => {
    this.setState({ showInfo: true, element: elementals[num]})

  }

  closeInfo = () => {
    this.setState({ showInfo: false})
  }

  render() {
    let { name, summary, symbol, category, number, source, appearance, atomic_mass, molar_heat, density, melt, boil } = this.state.element;

    return (
      <div className = "wrap">
        <h1>The Periodic Table of Elements</h1>
        <p className="">
          Created By {' '}
          <a href="https://chris-ashman.com" target="_blank">
            Chris Ashman
          </a>{' '}
          /{' '}
          <a href="https://github.com/Cashman1396/periodic-table" target="_blank">
            Check out the Source Code
          </a>
        </p>

        <div id="period_table">
          <Elemental showInfo={this.showInfo} num="1" />
          <Elemental showInfo={this.showInfo} num="2" />
          <Elemental showInfo={this.showInfo} num="3" />
          <Elemental showInfo={this.showInfo} num="4" />
          {/* Information Table */}
          {this.state.showInfo ? (
            <Fragment>
              <div id="element-box" className={`${category}`}>
                <div className="number">{number}</div>
                <div className="symbol">{symbol}</div>
                <div className="element-name">{name}</div>
              </div>

              <div id="ele-information">
                <div
                  onClick={this.closeInfo}
                  className="close-button"
                  title="Close">
                  Close [&times;]
                </div>
                <div>
                  <h1 className="big_title">{name}</h1>
                  <span className={`categ-name ${category}`}>{category}</span>
                  {appearance ? (
                    <div className="appearance">
                      <strong>Appearance:</strong> {appearance}
                  </div>
                
          ) : (
            ''
          )}
          <div className="atom_info">
            <span>Atomic Mass: {atomic_mass} | </span>
            <span>Density: {density}</span>
          {molar_heat ? <span> | Molar Heat: {molar_heat}</span> : ''}
          {melt ? <span> | Melt: {melt}K</span> : ''}
          {boil ? <span> | Boil: {boil}K</span> : ''}
          </div>
          <div>
            {summary} ...{' '}
            <a target="_blank" href={source}>
              Link
            </a>
          </div>
        </div>
      </div>
    </Fragment>
        ) : ( 
          ''
        )}
          <Elemental showInfo={this.showInfo} num="5" />
          <Elemental showInfo={this.showInfo} num="6" />
          <Elemental showInfo={this.showInfo} num="7" />
          <Elemental showInfo={this.showInfo} num="8" />
          <Elemental showInfo={this.showInfo} num="9" />
          <Elemental showInfo={this.showInfo} num="10" />
          <Elemental showInfo={this.showInfo} num="11" />
          <Elemental showInfo={this.showInfo} num="12" />
          <Elemental showInfo={this.showInfo} num="13" />
          <Elemental showInfo={this.showInfo} num="14" />
          <Elemental showInfo={this.showInfo} num="15" />
          <Elemental showInfo={this.showInfo} num="16" />
          <Elemental showInfo={this.showInfo} num="17" />
          <Elemental showInfo={this.showInfo} num="18" />
          <Elemental showInfo={this.showInfo} num="19" />
          <Elemental showInfo={this.showInfo} num="20" />
          <Elemental showInfo={this.showInfo} num="21" />
          <Elemental showInfo={this.showInfo} num="22" />
          <Elemental showInfo={this.showInfo} num="23" />
          <Elemental showInfo={this.showInfo} num="24" />
          <Elemental showInfo={this.showInfo} num="25" />
          <Elemental showInfo={this.showInfo} num="25" />
          <Elemental showInfo={this.showInfo} num="26" />
          <Elemental showInfo={this.showInfo} num="27" />
          <Elemental showInfo={this.showInfo} num="28" />
          <Elemental showInfo={this.showInfo} num="29" />
          <Elemental showInfo={this.showInfo} num="30" />
          <Elemental showInfo={this.showInfo} num="31" />
          <Elemental showInfo={this.showInfo} num="32" />
          <Elemental showInfo={this.showInfo} num="33" />
          <Elemental showInfo={this.showInfo} num="34" />
          <Elemental showInfo={this.showInfo} num="35" />
          <Elemental showInfo={this.showInfo} num="36" />
          <Elemental showInfo={this.showInfo} num="37" />
          <Elemental showInfo={this.showInfo} num="38" />
          <Elemental showInfo={this.showInfo} num="39" />


        </div>
        <p className="center footer">Made by Chris Ashman @ 2021</p>
      </div>
    )
  }
}

export default App;