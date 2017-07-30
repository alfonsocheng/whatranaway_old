import React from 'react'
import { Checkbox } from 'semantic-ui-react';

class RaidCheckbox extends React.Component {
  render () {
    return (
      <div>
        <Checkbox
          toggle
          label={this.props.label}
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

export default RaidCheckbox
