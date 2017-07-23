import React from 'react'
import ReactDOM from 'react-dom'
import CpInput from '../components/cpInput'

const MainApp = React.createClass({
  getInitialState() {
    return {
      pokemonId: 0,
      cp: null,
    };
  },

  render () {
    return (
      <div>
        main component ok
        <CpInput 
          cp={this.state.cp}
        />
      </div>
    )
  }
})

ReactDOM.render(
  <MainApp />,
  document.getElementById('main-root')
);
