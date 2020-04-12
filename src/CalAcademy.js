import React from 'react';
import './puzzle.scss';
import { Dit } from './Dit.js';
<<<<<<< HEAD
import { AnswerForm } from './AnswerForm'
=======
import { CenterImage } from './Image.js'
import calAcademy from './CalAcademy.jpeg'
import './CalAcademy.scss'
>>>>>>> Add some story

export function CalAcademy(props) {
  return (
    <div className="puzzle CalAcademy">
      <CenterImage src={calAcademy} />
      <p>
        Did you know today's California Academy of Science was built in 2008? It replaced an earlier building
        from 1916 which in turn replaced the 
        {' '}
        <a href="https://en.wikipedia.org/wiki/California_Midwinter_International_Exposition_of_1894#Manufactures_and_Liberal_Arts_Building">
          Mechanical Arts Building
        </a> from the late 1800's.  A funny story is told about a puzzle hunt at the 
        {' '}
        <a href="https://en.wikipedia.org/wiki/Panama%E2%80%93Pacific_International_Exposition#Commemorations">Pan Pacific International Exposition</a>
        {' '}
        where
        the a globe of solid gold in the original building was to be the prize. It would have been worth $32 billion. Historians
        however doubt that the story is real.
      </p>
      <p>
        Another funny story from the 2008 renovation, a construction worker by the name of
        Walter Döggflava, working on the dinosaur skeleton, found a corroded brass cylinder. He
        thought it was junk and dropped it in his truck.  Mr. Döggflava recalls that night he needed
        a doorstop for his kitchen and used that old brass cylinder. He's been using it ever since until
        earlier this year, Mr Döggflava slammed the door too hard, broke the cylinder, and it revealed a
        piece of paper inside. Mr.  Döggflava thinks the note is some 
        visitor's list of the attractions they wanted to see
        at the exposition. He's been curious about the funny scribbles at the top. He says it is some form of
        {' '}<a href="https://en.wikipedia.org/wiki/Gregg_shorthand">shorthand</a> but has not been able to translate it.
        For your amusement, here is a reproduction of Mr. Döggflava's sightseeing list:
      </p>
      <p>
      </p>
      <blockquote>
        <p>
          Location: Cal Academy Lobby
        </p>
        <p>
          <blockquote>
            <Dit> -•-•   ---   ••-   -•   -   / </Dit>
            <Dit> -••   ••   -•   ---   •••   •-   ••-   •-•   / </Dit>
            <Dit> -   ---   •   •••   / </Dit>
            <Dit> -   ---   / </Dit>
            <Dit> -•-•   ••••   ---   ---   •••   • </Dit>
          </blockquote>
        </p>
        <div>
          (1) arboretum bridge
        </div>
        <div>
          (2) tower of jewels
        </div>
        <div>
          (3) zone
        </div>
        <div>
          (4) court of abundance
        </div>
        <div>
          (5) palace of fine a.
        </div>
        <div>
          (6) music concourse
        </div>
        <div>
          (7) energy fountain
        </div>
        <div>
          (8) education and social economy
        </div>
      </blockquote>
<<<<<<< HEAD
      <AnswerForm correctAnswer="music concourse" linkTo={props.linkTo} currentScreen={props.currentScreen} />
=======

      <hr/>

      <p>
        To solve this puzzle, ask these questions:
        <ul>
          <li>
            What can I see at the location clue (
            <a href="https://www.google.com/maps/place/California+Academy+of+Sciences/@37.7755373,-122.4749379,14z/data=!3m1!5s0x80858743a90cd067:0xba7e223a6834f740!4m5!3m4!1s0x80858743acfb4421:0x1b8487cfc077cab9!8m2!3d37.7698667!4d-122.4660963">
              Cal Academy Lobby in Google Maps
            </a>
            )?  No need to search beyond 50 feet of the lobby.
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
>>>>>>> Add some story
    </div>
  );
}

