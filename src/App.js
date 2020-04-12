import React from 'react';
import './App.scss';
import { Home } from './Home.js'
import { MusicConcourse } from './MusicConcourse.js'
import { CalAcademy } from './CalAcademy.js'
import { AnswerForm } from './AnswerForm.js'
import { Windmill } from './Windmill.js'
import { About } from './About.js'
import './Nav.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      currentScreen: 0,
      navOrder: [Home, CalAcademy, MusicConcourse, Windmill]
=======
      currentScreen: CalAcademy
      // currentScreen: Home 
>>>>>>> Add some story
    }
  }

  linkTo = (comp) => {
    this.setState( { currentScreen : comp } );
  }

  render() {
    const ComponentName = this.state.navOrder[this.state.currentScreen];
    return (
      <div className="App">
<<<<<<< HEAD
=======
        <nav className="Nav">
          <button key="navbutton1" type="button" onClick={() => this.linkTo(Home)}>Home</button>
          <button key="navbutton3" type="button" onClick={() => this.linkTo(AnswerForm)}>Answer Form</button>
          <button key="navbutton4" type="button" onClick={() => this.linkTo(CalAcademy)}>Cal Academy</button>
          <button key="navbutton2" type="button" onClick={() => this.linkTo(MusicConcourse)}>Music Concourse</button>
          <button key="navbutton5" type="button" onClick={() => this.linkTo(Windmill)}>Windmill</button>
        </nav>
>>>>>>> Add some story
        <header className="App-header">
          <ComponentName linkTo={this.linkTo} currentScreen={this.state.currentScreen} />
        </header>
      </div>
    );
  }
}

export default App;
