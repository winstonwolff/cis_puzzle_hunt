import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './Home.js'
import { MusicConcourse } from './MusicConcourse.js'
import { AnswerForm } from './AnswerForm.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScreen: AnswerForm
    }
  }

  submitAnswer(answer) {
    console.log('answer=', answer)
  }

  linkTo = (comp) => {
    this.setState( { currentScreen : comp } );
  }

  render() {
    const ComponentName = this.state.currentScreen;
    return (
      <div className="App">
        <div className="TempNav">
          <button key="navbutton1" type="button" onClick={() => this.linkTo(Home)}>Home</button>
          <button key="navbutton2" type="button" onClick={() => this.linkTo(MusicConcourse)}>Music Concourse</button>
          <button key="navbutton3" type="button" onClick={() => this.linkTo(AnswerForm)}>Answer Form</button>
        </div>
        <header className="App-header">
          <ComponentName />
        </header>
      </div>
    );
  }
}

export default App;
