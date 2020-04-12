import React from 'react';
import './App.css';
import { Home } from './Home.js'
import { MusicConcourse } from './MusicConcourse.js'
import { CalAcademy } from './CalAcademy.js'
import { AnswerForm } from './AnswerForm.js'
import { Windmill } from './Windmill.js'
import './Nav.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScreen: Home 
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
        <nav className="Nav">
          <button key="navbutton1" type="button" onClick={() => this.linkTo(Home)}>Home</button>
          <button key="navbutton2" type="button" onClick={() => this.linkTo(MusicConcourse)}>Music Concourse</button>
          <button key="navbutton3" type="button" onClick={() => this.linkTo(AnswerForm)}>Answer Form</button>
          <button key="navbutton4" type="button" onClick={() => this.linkTo(CalAcademy)}>Cal Academy</button>
          <button key="navbutton5" type="button" onClick={() => this.linkTo(Windmill)}>Windmill</button>
        </nav>
        <header className="App-header">
          <ComponentName />
        </header>
      </div>
    );
  }
}

export default App;
