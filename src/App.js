import React, { Component } from 'react';
import firebase from './firebase'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TimeWidget />
        </header>
      </div>
    );
  }
}

class TimeWidget extends React.Component{
  constructor(props){
      super(props);
      this.state={now: Date.now(), lastSpill: Date.now()};
      this.resetSpillCounter = this.resetSpillCounter.bind(this);
  }

  componentDidMount(){
    let logRef = firebase.database().ref('logs');
    logRef.on('child_added', (snapshot) => {
      this.setState({lastSpill:snapshot.val().time});
    })
    setInterval(()=>this.setState({now:Date.now()}), 500);
  }

  resetSpillCounter(){
    let logRef = firebase.database().ref('logs');
    let spill = {time:Date.now()};

    logRef.push(spill);

    this.setState({lastSpill:this.state.now});
  }

  render(){
      let elapsedTime = this.state.now - this.state.lastSpill;
      let s = ("00" + Math.floor((elapsedTime/1000))%60).substr(-2);
      let m = ("00" + Math.floor((elapsedTime/(1000*60)))%60).substr(-2);
      let h = ("00" + Math.floor((elapsedTime/(1000*60*60)))%24).substr(-2);
      let d = Math.floor((elapsedTime/(1000*60*60*24)))

      return <React.Fragment>
        <p>Time since David has spilled something:</p>

        <span className = "timer">{[d,h,m,s].join(":")}</span>
        <p/>
        <button onClick = {this.resetSpillCounter}>Oh no, David spilled something again!</button>
      </React.Fragment>
  }
}

export default App;
