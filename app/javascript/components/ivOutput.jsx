import React from 'react'
import { Table } from 'semantic-ui-react';
var _ = require('underscore');
var titleize = require("underscore.string/titleize");

import PokemonConstants from '../constants/pokemonConstants'

class IvOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ivs: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pokemonId > 0 && nextProps.cp > 0) {
      console.log(`IVs for poke ${nextProps.pokemonId} with cp ${nextProps.cp}`)
      fetch(`./pokemon/0/1`)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data);
          this.setState({
            ivs: data
          });
        })
        .catch((response) => {
          console.log('fetch error')
          console.log(response)
        });
    }
    // debugger
  }

  render () {
    let ivTable = this.getTable(this.state.ivs);

    return (
      <div>
        {ivTable}
      </div>
    )
  }

  getTable (ivs) {
    let poke = this.props.pokemonId ? titleize(_.invert(PokemonConstants.POKEDEX_BY_NAME)[this.props.pokemonId]) : '';
    let cp = this.props.cp || 0;
    console.log(ivs);
    // console.log(PokemonConstants.POKEDEX_BY_NAME)
    // console.log(_.invert(PokemonConstants.POKEDEX_BY_NAME)[this.props.pokemonId])
    // debugger
    return (
      <Table celled structured collapsing textAlign='center'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='5'>
            { poke ? poke + ' ' : 'Select a Pokémon! ' }
            { cp > 0 ? cp + 'CP' : 'Enter a CP!' }
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell rowSpan='2'>Level</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Percent</Table.HeaderCell>
          <Table.HeaderCell colSpan='3'>IVs</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Attack</Table.HeaderCell>
          <Table.HeaderCell>Defense</Table.HeaderCell>
          <Table.HeaderCell>Stamina</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>80%</Table.Cell>
          <Table.Cell>12</Table.Cell>
          <Table.Cell>12</Table.Cell>
          <Table.Cell>12</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell rowSpan='3'>3</Table.Cell>
          <Table.Cell>80%</Table.Cell>
          <Table.Cell>11</Table.Cell>
          <Table.Cell>11</Table.Cell>
          <Table.Cell>11</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>80%</Table.Cell>
          <Table.Cell>10</Table.Cell>
          <Table.Cell>10</Table.Cell>
          <Table.Cell>12</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>80%</Table.Cell>
          <Table.Cell>7</Table.Cell>
          <Table.Cell>8</Table.Cell>
          <Table.Cell>15</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    )
  }
}

export default IvOutput
