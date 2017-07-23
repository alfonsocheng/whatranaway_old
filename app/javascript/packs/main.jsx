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
      pokemon: '',
      cp: '',
    };
  },

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <PokemonPicker 
            value={this.state.pokemon}
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
            pokemon={this.state.pokemon}
            cp={this.state.cp}
          />
        </div> 
      </MuiThemeProvider>
    )
  },
  
  handlePokemonChange(e) {
    this.setState({
      pokemon: e.target.value
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
