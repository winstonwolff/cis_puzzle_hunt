import React from 'react';
import './App.scss';
import { Home } from './Home.js'
import { MusicConcourse } from './MusicConcourse.js'
import { CalAcademy } from './CalAcademy.js'
import { AnswerForm } from './AnswerForm.js'
import { Windmill } from './Windmill.js'
import { Nav } from './Nav.js'

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

  render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header">
          <Windmill onClick={this.submitAnswer} />
        </header>
      </div>
    );
  }
}

export default App;
