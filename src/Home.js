import React from 'react'
import midwinterExpo from './midwinter-expo.jpeg'
import { InlineImage } from './Image.js'
import { AnswerForm } from './AnswerForm'
import "./puzzle.scss"
import "./Home.scss"

export function Home(props) {
  return (
    <div className="puzzle Home">
      <InlineImage className="expo-image" src={midwinterExpo} />
      <h1> Treasure of the Gilded Globle </h1>
      <p>
        SF's 1894 Midwinter Exposition demonstrated amazing new inventions from around the world and
        showcased a globe of solid gold to celebrate it's mining wealth.  Wolff-Tang Studios has
        discovered the globe was also the prize of a secret puzzle/scavenger hunt. But the final puzzle
        was never solved and the prize was never awarded. Recently a new clue was found. Can you solve
        the mystery?
      </p>
      <p>
        This game is a puzzle hunt—your team starts at a virtual location with a puzzle.
        When you solve the puzzle, your answer leads to a new location and puzzle. We
        recommend playing as a team of several people. It could be your whole family,
        or some friends over video conferencing. Teams with a variety of backgrounds
        often do better.
      </p>

      <h2> Rules </h2>
      <p>
        Sequence — Play starts with the first puzzle: a location clue which
        you should find in Google Maps and a written clue.  The solution to the
        puzzle leads to a new location and written clue.
      </p>
      <p>
        Game Boundary — All locations for this game are within Golden Gate Park, San Francisco, including the panhandle.
      </p>
      <p>
        Location Clues — Solving the puzzle will require both the written clue and something in Google Maps within
        50’ of the location clue.
      </p>

      <h2> Start the Game </h2>
      <p>
        To begin the game, enter the first location: "cal academy lobby"
      </p>
      <AnswerForm correctAnswer="cal academy lobby" linkTo={props.linkTo} currentScreen={props.currentScreen} />
    </div>
  );
}
