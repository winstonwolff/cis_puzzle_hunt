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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AnswerForm onClick={this.submitAnswer} />
        </header>
      </div>
    );
  }
}

export default App;
