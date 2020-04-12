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
      navOrder: [Home, CalAcademy, MusicConcourse, Windmill]
    }
  }

  linkTo = (comp) => {
    this.setState( { currentScreen : comp } );
  }

  render() {
    const ComponentName = this.state.navOrder[this.state.currentScreen];
    return (
      <div className="App">
        <header className="App-header">
          <ComponentName linkTo={this.linkTo} currentScreen={this.state.currentScreen} />
        </header>
      </div>
    );
  }
}

export default App;
