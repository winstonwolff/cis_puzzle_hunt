import React from 'react';
import './puzzle.css';

export function Dit(props) {
  return (
    <span className="Dit">
      { props.children }
    </span>
  );
}

export function MusicConcourse(props) {
  return (
    <div className="puzzle MusicConcourse">
      <p>
            Location Clue: Music Concourse
      </p>
      <p>
            Written Clue:
      </p>
      <blockquote>
        <p>
          The lady plays this instrument
        </p>

        <div>
          D _ _ _ =
            <Dit>- •••• •• ••• /</Dit>
            <Dit> •• ••• /</Dit>
            <Dit> -• --- - /</Dit>
            <Dit> •• • /</Dit>
            <Dit> • ••• •-- • •-• </Dit>
        </div>
        <div>
          G _ _ _ _ _ = <Dit> -•-• •••• •• -• • ••• • /</Dit>
          <Dit> •• -- -- • •-• ••• •• --- -• /</Dit>
          <Dit> ••• -•-• •••• --- --- •-•• /</Dit>
          <Dit> •-• --- -•-• -•- ••• </Dit>
        </div>
        <div>
          H _ _ _ = <Dit> -• --- •--• • / </Dit>
          <Dit> -• --- - / </Dit>
          <Dit> - •••• •• ••• / </Dit>
          <Dit> --- -• • </Dit>
        </div>
        <div>
          T _ _ _ _ _ _ = <Dit> -•-• •- •-•• •• ••-• --- •-• -• •• •- / </Dit>
          <Dit> •- -•-• •- -•• • -- -•-- / </Dit>
          <Dit> •-•• --- -••• -••• -•-- </Dit>
        </div>
    </blockquote>
      <p>
        To solve this puzzle, ask these questions:
        <ul>
          <li>
            What can I see at the location clue (Music Concourse in Google Maps)?
          </li>
          <li>
            How does the word clue relate to the things I see?
          </li>
          <li>
            The answer will be the location of the next puzzle. 
          </li>
        </ul>
      </p>
      <p>
        If you think you know the answer, type it into the website. If you are correct, you will be given the next clue.
      </p>

    </div>
  );
}
