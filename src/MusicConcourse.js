import React from 'react';
import './puzzle.scss';
import { Dit } from './Dit.js';
import { CenterImage } from './Image.js'
import { AnswerForm } from './AnswerForm'
import musicConcourse from './MusicConcourse.png'

export function MusicConcourse(props) {
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
            <Dit> - •••• •• ••• /</Dit>
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
          T _ _ _ _ _ _ = <Dit> - ••- •-•• •• •--• ••• / </Dit>
          <Dit> -• • •- •-• / </Dit>
          <Dit> •-- •• -• -•• -- •• •-•• •-•• </Dit>
        </div>
      </blockquote>

      <AnswerForm correctAnswer="tulips near windmill" linkTo={props.linkTo} currentScreen={props.currentScreen} />
    </div>
  );
}
