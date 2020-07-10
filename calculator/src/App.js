import React, {Component} from 'react';
import './App.css';
import Result from './components/Result';
import ButtonPanel from './components/ButtonPanel';
import Calculate from './logic/Calculate'

class App extends Component{

  state = {
    cache: null,
    operation: null,
    total: null
  }

  handleClick = (buttonValue) => {
    this.setState(
        Calculate(this.state, buttonValue)
      )
  }

  render(){
    console.log(this.state);
    return(
      <div className="App">
        <div className="title">Calculator</div>
        <div className="Display">
          <Result value = {this.state.cache || this.state.total || "0"}/>
          <ButtonPanel pickButton = {this.handleClick}/>
        </div>
      </div>
    ) 
  }
}

export default App;
