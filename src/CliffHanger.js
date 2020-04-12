import React from 'react';
import './puzzle.scss';
import { CenterImage } from './Image.js'

export function CliffHanger(props) {
  return (
    <div className="puzzle CliffHanger">
      <p>
        To be continued...
      </p>
      <br/>
      <p>
        A game by Winston Wolff and Jay Hirsch. Testing by Walter Wolff-Tang.
      </p>
      <p>
        If you have enjoyed this puzzle hunt so far, and want to see the end of
        it, please send us an email. Just one sentence is enough. It takes effort to
        craft these puzzles and we don't want to make it if nobody's playing.
      </p>
      <p>
        Send an email to: {' '}
        <a href="mailto:winstonw@stratolab.com">winstonw@stratolab.com</a>.
      </p>
    </div>
  );
}
