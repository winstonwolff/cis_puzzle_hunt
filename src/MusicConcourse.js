import React from 'react';
import './puzzle.scss';
import { Dit } from './Dit.js';
import { CenterImage } from './Image.js'
import { AnswerForm } from './AnswerForm'
import musicConcourse from './MusicConcourse.png'

export function MusicConcourse(_props) {
  return (
    <div className="puzzle MusicConcourse">
      <CenterImage src={musicConcourse} />
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
            What can I see at the location clue (
            <a href="https://www.google.com/maps/place/Music+Concourse/@37.7698876,-122.470756,17z/data=!3m1!4b1!4m5!3m4!1s0x808587426dade263:0xa278dc852e3d48f9!8m2!3d37.7698834!4d-122.4685673">
              Music Concourse in Google Maps
            </a>
            )?
          </li>
          <li>
            No need to search beyond 50 feet of the Music Concourse.
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
        When you have an answer, type it into the website. If you are correct, you will be given the next clue.
      </p>
      <AnswerForm correctAnswer="Cal Academy" linkTo={_props.linkTo} comp={_props.comp} />

    </div>
  );
}
