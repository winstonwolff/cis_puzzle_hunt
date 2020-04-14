import React from 'react';
import './puzzle.scss';
import { CenterImage } from './Image.js'
import globe from './globe.png'

export function CliffHanger(props) {
  return (
    <div className="puzzle CliffHanger">
      <CenterImage src={globe} />
      <p>
        You have reached the end of part I. You are awarded a silver nugget for completing the puzzles so far. To claim your prize (a beautiful custom-made PDF certificate), email
        {' '}<a href="mailto:winstonw@stratolab•com">winstonw@stratolab.com</a> and say the secret word: LOLOPOP.
      </p>
      <br/>
      <p>
        This has been a game by Winston Wolff and Jay Hirsch. Testing by Walter Wolff-Tang.
      </p>
      <p>
        If you have enjoyed this puzzle hunt so far, and want to see more of it,
        please send us an email. Even saying, "More puzzles please" will encourage us.
        It takes effort to craft these puzzles and we don't want to make it if
        nobody's playing.
      </p>
      <p>
        Send an email to: {' '}
        <a href="mailto:winstonw@stratolab.com">winstonw@stratolab.com</a>.
      </p>
    </div>
  );
}
