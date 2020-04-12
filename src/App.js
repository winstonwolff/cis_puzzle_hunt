import React from 'react';
import './App.scss';
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
      currentScreen: 0,
      navOrder: [Home, MusicConcourse, CalAcademy, Windmill]
    }
  }

  submitAnswer(answer) {
    console.log('answer=', answer)
  }

  linkTo = (comp) => {
    this.setState( { currentScreen : comp } );
  }

  render() {
    const ComponentName = this.state.navOrder[this.state.currentScreen];
    return (
      <div className="App">
        <nav className="Nav">
          <button key="navbutton1" type="button" onClick={() => this.linkTo(0)}>Home</button>
          <button key="navbutton2" type="button" onClick={() => this.linkTo(1)}>Music Concourse</button>
          <button key="navbutton3" type="button" onClick={() => this.linkTo(2)}>Cal Academy</button>
          <button key="navbutton4" type="button" onClick={() => this.linkTo(3)}>Windmill</button>
        </nav>
        <header className="App-header">
          <ComponentName linkTo={this.linkTo} currentScreen={this.state.currentScreen} />
        </header>
      </div>
    );
  }
}

export default App;
