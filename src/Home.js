import React from 'react';
export function Home(_props) {
  return (
    <div className="puzzle Home">
      <h1> Golden Gate Puzzle Hunt </h1>
      <p>
        This game is a puzzle hunt—your team starts at a virtual location with a puzzle.
        You solve the puzzle and the answer leads to a new location and puzzle. We
        recommend playing as a team of several people. It could be your whole family,
        or some friends over video conferencing. Teams with a variety of backgrounds
        often do better.
      </p>
      <h2> Rules </h2>
      <p>
        Puzzle Sequence — Play starts with the first puzzle: a location clue which you should search in Google Maps
        and a written clue.  The solution to the puzzle leads to a new location with a new written
        puzzle.
      </p>
      <p>
        Game Boundary — All locations for this game are within Golden Gate Park, San Francisco, including the panhandle.
      </p>
      <p>
        Location Clues — Solving the puzzle will require both the written clue and something in Google Maps within
        50’ of the location clue.
      </p>
    </div>
  );
}
