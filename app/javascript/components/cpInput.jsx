import React from 'react'
// import NumberInput from 'material-ui-number-input';
// import { TextField } from 'material-ui';
import { Input } from 'semantic-ui-react';


class CpInput extends React.Component {
  render () {
    return (
      <div>
        <Input
          value={this.props.value}
          onChange={this.props.onChange}
          label='CP'
          labelPosition='left corner'
          type='number'
          placeholder={'Enter CP'}
        />
      </div>
    )
  }
}

export default CpInput
