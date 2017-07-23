import React from 'react'
import { Input } from 'semantic-ui-react';
import PokemonConstants from '../constants/pokemonConstants'
var _ = require('underscore');
var titleize = require("underscore.string/titleize");

class PokemonPicker extends React.Component {

  render () {
    const pokeList = this.getPokeList();

    return (
      <div>
        <Input
          value={this.props.value}
          onChange={this.props.onChange}
          label='Pokémon'
          placeholder={'Pick a Pokémon'}
          list='pokedex'
        />
        {pokeList}
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
