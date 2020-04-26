import React from 'react';
import './puzzle.scss';
import { AnswerForm } from './AnswerForm'

export function Windmill(props) {
  return (
    <div className="puzzle Windmill">
      <p>
            Location Clue: tulips near windmill
      </p>
      <p>
            Written Clue:
      </p>
      <blockquote>
        <p>
        Sign of the Queen
        </p>
        <p>
          12 _ 11 15 18 10 21 / 8 _ 19 16 4
        </p>
      </blockquote>
      <AnswerForm correctAnswer="mclaren lodge" linkTo={props.linkTo} currentScreen={props.currentScreen} />
    </div>
  );
}

