import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from 'material-ui/styles';

// My stuff
import CpInput from '../components/cpInput'
import IvOutput from '../components/ivOutput'

const MainApp = React.createClass({
  getInitialState() {
    return {
      pokemonId: 0,
      cp: '',
    };
  },

  render () {
    return (
      <MuiThemeProvider>
        <div>
          main component ok
          <CpInput 
            value={this.state.cp}
            loading={true}
            onChange={this.handleCpChange}
          />
          <IvOutput 
            cp={this.state.cp}
          />
        </div> 
      </MuiThemeProvider>
    )
  },
  
  handleCpChange(e){
    this.setState({
      cp: e.target.value
    })
  }
})

ReactDOM.render(
  <MainApp />,
  document.getElementById('main-root')
);
