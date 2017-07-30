import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from 'material-ui/styles';

// My stuff
import PokemonPicker from '../components/pokemonPicker'
import CpInput from '../components/cpInput'
import RaidCheckbox from '../components/raidCheckbox'
import IvOutput from '../components/ivOutput'

const MainApp = React.createClass({
  getInitialState() {
    return {
      pokemonId: '',
      cp: '',
      raidCheckboxChecked: true,
      raidCheckboxLabel: 'was a raid boss',
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
            onChange={this.handleCpChange}
          />
          <RaidCheckbox
            checked={this.state.raidCheckboxChecked}
            label={this.state.raidCheckboxLabel}
            onChange={this.handleRaidChange}
          />
          <IvOutput
            pokemonId={this.state.pokemonId}
            cp={this.state.cp}
            ivs={this.state.ivs}
            raid={this.state.raidCheckboxChecked}
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
  },

  handleRaidChange() {
    let newChecked = !this.state.raidCheckboxChecked;
    let newLabel = newChecked ? 'was a raid boss' : 'not a raid boss';
    this.setState({
      raidCheckboxChecked: newChecked,
      raidCheckboxLabel: newLabel,
    })
  },
})

ReactDOM.render(
  <MainApp />,
  document.getElementById('main-root')
);
