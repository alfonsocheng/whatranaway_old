import React from 'react'
import { Dropdown } from 'semantic-ui-react';
var _ = require('underscore');
var titleize = require("underscore.string/titleize");

import PokemonConstants from '../constants/pokemonConstants'

class PokemonPicker extends React.Component {

  render () {
    const pokeList = this.getPokeList();

    return (
      <div>
        <Dropdown
          value={this.props.value}
          onChange={this.props.onChange}
          label='Pokémon'
          placeholder={'Pick a Pokémon'}
          search
          selection
          options={PokemonConstants.POKEMON_OPTIONS}
        />

      </div>
    )
  }

  getPokeList () {
    let datalist =
      <datalist id='pokedex'>
        { _.map(PokemonConstants.POKEDEX_BY_NAME, (key, pokemon) => {
          return <option value={titleize(pokemon)} key={key}/>;
        }) }
      </datalist>
    return datalist;
  }
}

export default PokemonPicker
