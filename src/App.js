import React from 'react';
import './App.scss';

import { Home } from './Home.js'
import { CalAcademy } from './CalAcademy.js'
import { MusicConcourse } from './MusicConcourse.js'
import { Windmill } from './Windmill.js'
import { CliffHanger } from './CliffHanger.js'
import { CenterImage } from './Image.js'
import titleType from './TitleType.png'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScreen: 0,
      navOrder: [Home, CalAcademy, MusicConcourse, Windmill, CliffHanger]
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
          <CenterImage className='titleType' src={titleType} />
          <ComponentName linkTo={this.linkTo} currentScreen={this.state.currentScreen} />
        </header>
      </div>
    );
  }
}

export default App;
