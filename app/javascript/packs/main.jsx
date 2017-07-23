import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from 'material-ui/styles';

// My stuff
import CpInput from '../components/cpInput'

const MainApp = React.createClass({
  getInitialState() {
    return {
      pokemonId: 0,
      cp: null,
    };
  },

  render () {
    return (
      <MuiThemeProvider>
        <div>
          main component ok
          <CpInput 
            cp={this.state.cp}
          />
        </div> 
      </MuiThemeProvider>
    )
  }
})

ReactDOM.render(
  <MainApp />,
  document.getElementById('main-root')
);
