import React from 'react'
// import NumberInput from 'material-ui-number-input';
import { TextField } from 'material-ui';


class CpInput extends React.Component {
  render () {
    return (
      <div>
        cp input comp
        <TextField
          min={0}
          value={this.props.value}
          prefix={'CP'}
          placeholder={'Enter CP'}
          type='number'
        />
      </div>
    )
  }
}

export default CpInput