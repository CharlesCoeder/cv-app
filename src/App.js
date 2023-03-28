import React, { Component } from 'react';
import UserInput from './components/UserInput';
import ResumeOutput from './components/ResumeOutput';

class App extends Component{

  constructor(props) {
    super(props);

    this.state = {};
    this.updateState = this.updateState.bind(this);
  }

  updateState(key, state){
    this.setState({[key]: state});
  }

  render(){
    return (
      <div className="App">
        <UserInput updateState={this.updateState}/>
        <ResumeOutput state={this.state}/>
      </div>
    );
  }
}

export default App;
