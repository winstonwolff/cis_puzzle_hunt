import React from 'react'
import ggPark1897 from './GG-park-1897-stereo.jpg'
import { InlineImage } from './Image.js'
import { AnswerForm } from './AnswerForm'
import "./puzzle.scss"
import "./Home.scss"

export function Home(props) {
  return (
    <div className="puzzle Home">
      <InlineImage className="ggPark1897" src={ggPark1897} />
      <h1> Golden Gate Puzzle Hunt </h1>
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
        To begin the game, click on the Answer Form above, and enter the first location: "Music Concourse"
      </p>
      <AnswerForm correctAnswer="Music Concourse" linkTo={props.linkTo} currentScreen={props.currentScreen} />
    </div>
  );
}
