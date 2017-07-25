import React from 'react'
import { Table } from 'semantic-ui-react';
var _ = require('underscore');
var titleize = require("underscore.string/titleize");

import PokemonConstants from '../constants/pokemonConstants'

class IvOutput extends React.Component {

  render () {
    const ivTable = this.getTable();

    return (  
      <div>
        Output
        {this.props.pokemonId}
        {this.props.cp}
        {ivTable}
      </div>
    )
  }
// { this.props.pokemon ? titleize(this.props.pokemon) : 'Select a Pokemon!' }
  getTable () {
    return (
      <Table celled structured>
      <Table.Header>
        <Table.Row colSpan='5'>

        </Table.Row>
        <Table.Row>
          <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Type</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Files</Table.HeaderCell>
          <Table.HeaderCell colSpan='3'>Languages</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Ruby</Table.HeaderCell>
          <Table.HeaderCell>JavaScript</Table.HeaderCell>
          <Table.HeaderCell>Python</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Alpha Team</Table.Cell>
          <Table.Cell>Project 1</Table.Cell>
          <Table.Cell textAlign='right'>2</Table.Cell>
          <Table.Cell textAlign='center'>
            CHECK
          </Table.Cell>
          <Table.Cell />
          <Table.Cell />
        </Table.Row>
        <Table.Row>
          <Table.Cell rowSpan='3'>Beta Team</Table.Cell>
          <Table.Cell>Project 1</Table.Cell>
          <Table.Cell textAlign='right'>52</Table.Cell>
          <Table.Cell textAlign='center'>
            CHECK
          </Table.Cell>
          <Table.Cell />
          <Table.Cell />
        </Table.Row>
        <Table.Row>
          <Table.Cell>Project 2</Table.Cell>
          <Table.Cell textAlign='right'>12</Table.Cell>
          <Table.Cell />
          <Table.Cell textAlign='center'>
            CHECK
          </Table.Cell>
          <Table.Cell />
        </Table.Row>
        <Table.Row>
          <Table.Cell>Project 3</Table.Cell>
          <Table.Cell textAlign='right'>21</Table.Cell>
          <Table.Cell textAlign='center'>
            CHECK
          </Table.Cell>
          <Table.Cell />
          <Table.Cell />
        </Table.Row>
      </Table.Body>
    </Table>
    )
  }
}

export default IvOutput
