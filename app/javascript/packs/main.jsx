import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from 'material-ui/styles';

// My stuff
import CpInput from '../components/cpInput'
import IvOutput from '../components/ivOutput'
import PokemonPicker from '../components/pokemonPicker'

const MainApp = React.createClass({
  getInitialState() {
    return {
      pokemonId: '',
      cp: '',
    };
  },

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <PokemonPicker
            value={this.state.pokemonId}
            loading={true}
            onChange={this.handlePokemonChange}
          />
          <CpInput
            value={this.state.cp}
            loading={true}
            onChange={this.handleCpChange}
          />
          Level Slider (with quick buttons)
          <IvOutput
            pokemonId={this.state.pokemonId}
            cp={this.state.cp}
            ivs={this.state.ivs}
          />
        </div>
      </MuiThemeProvider>
    )
  },

  handlePokemonChange(e, data) {
    // console.log(data)
    // debugger
    this.setState({
      pokemonId: data.value
    })
  },

  handleCpChange(e) {
    this.setState({
      cp: e.target.value
    })
  }
})

ReactDOM.render(
  <MainApp />,
  document.getElementById('main-root')
);
