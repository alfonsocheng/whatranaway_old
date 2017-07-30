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
      fetch(`./pokemon/${nextProps.pokemonId}/${nextProps.cp}`)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          // console.log(data);
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
    let ivsByLevel = this.getIvsByLevel(this.state.ivs);
    let ivTable = this.getTable(ivsByLevel);

    return (
      <div>
        {ivTable}
      </div>
    )
  }

  getTable (ivsByLevel) {
    let poke = this.props.pokemonId ? titleize(_.invert(PokemonConstants.POKEDEX_BY_NAME)[this.props.pokemonId]) : '';
    let cp = this.props.cp || 0;
    let tableBody;

    if (_.isEmpty(_.keys(ivsByLevel))) {
      tableBody = (
        <Table.Body>
          <Table.Row>
            <Table.Cell colSpan='5'>Sorry no possibilities found!</Table.Cell>
          </Table.Row>
        </Table.Body>
      )
    } else {
      let rows = [];
      _.each(_.keys(ivsByLevel).sort().reverse(), (level) => {
        console.log(level);
        console.log(ivsByLevel[level]);
        _.each(ivsByLevel[level], (ivPossibility) => {
          rows.push(
            this.createTableRow(level, ivPossibility, ivPossibility === ivsByLevel[level][0], ivsByLevel[level].length)
          );
        });
      });
      tableBody = (
        <Table.Body>
          {rows}
        </Table.Body>
      )
    }

    // tableBody = (
    //   <Table.Body>
    //     <Table.Row>
    //       <Table.Cell>1</Table.Cell>
    //       <Table.Cell>80%</Table.Cell>
    //       <Table.Cell>12</Table.Cell>
    //       <Table.Cell>12</Table.Cell>
    //       <Table.Cell>12</Table.Cell>
    //     </Table.Row>
    //     <Table.Row>
    //       <Table.Cell rowSpan='3'>3</Table.Cell>
    //       <Table.Cell>80%</Table.Cell>
    //       <Table.Cell>11</Table.Cell>
    //       <Table.Cell>11</Table.Cell>
    //       <Table.Cell>11</Table.Cell>
    //     </Table.Row>
    //     <Table.Row>
    //       <Table.Cell>80%</Table.Cell>
    //       <Table.Cell>10</Table.Cell>
    //       <Table.Cell>10</Table.Cell>
    //       <Table.Cell>12</Table.Cell>
    //     </Table.Row>
    //     <Table.Row>
    //       <Table.Cell>80%</Table.Cell>
    //       <Table.Cell>7</Table.Cell>
    //       <Table.Cell>8</Table.Cell>
    //       <Table.Cell>15</Table.Cell>
    //     </Table.Row>
    //   </Table.Body>
    // )

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

      {tableBody}

    </Table>
    )
  }

  getIvsByLevel(ivs) {
    // console.log(ivs);
    let ivsByLevel = {}
    if (ivs[0] && ivs[0][0] === null) {
      console.log(`no IVs possible! Try something else between ${ivs[0][1]} and ${ivs[0][2]}`)
      return ivsByLevel;
    }
    _.each(ivs, (lsad) => {
      let level = lsad[0];
      let sad = [lsad[1], lsad[2], lsad[3]];
      if (ivsByLevel[level] != null) {
        ivsByLevel[level].push(sad);
      } else {
        ivsByLevel[level] = [sad];
      }
    });

    return ivsByLevel;
  }

  createTableRow(level, ivPossibility, firstOfItsLevel, rowSpan) {
    // this creates a table row
    // firstOfItsLevel is true or false - determines whether to show the level
    // rowSpan is the number of IV possibilities in that level
    return (
      <Table.Row>
        { firstOfItsLevel ? (<Table.Cell rowSpan={rowSpan}>{level}</Table.Cell>) : null }
        <Table.Cell>{Math.round((ivPossibility[0] + ivPossibility[1] + ivPossibility[2]) * 1000 / 45) / 10}%</Table.Cell>
        <Table.Cell>{ivPossibility[1]}</Table.Cell>
        <Table.Cell>{ivPossibility[2]}</Table.Cell>
        <Table.Cell>{ivPossibility[0]}</Table.Cell>
      </Table.Row>
    )
  }
}

export default IvOutput
