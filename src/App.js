import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {
    username: 'dilpreet'
  }
  onChangeHandler = (e) => {
    this.setState({
      username: e.target.value
    });
  }
  render(){
    return (
      <div className="App">
        <UserInput 
          username={this.state.username}
          onChangeHandler = {this.onChangeHandler}
        />
        <UserOutput username='dimpy'/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
  
}

export default App;
