import React from 'react';
import './puzzle.scss';
import { Dit } from './Dit.js';
import { AnswerForm } from './AnswerForm'
import { CenterImage } from './Image.js'
import calAcademy from './CalAcademy.jpeg'
import './CalAcademy.scss'

export function CalAcademy(props) {
  return (
    <div className="puzzle CalAcademy">
      <CenterImage src={calAcademy} />
      <p>
        Goldan Gate Park just celebrated it's 150-year-old birthday. It's home to great
        buildings like the Conservatory of Flowers (opened 1879). Bison have lived there since 1891
        and newer stuff like the Hardly Strickly Bluegrass Festival and the California Academy of
        Science. A funny story is told about a puzzle hunt at the 
        {' '}
        <a href="https://en.wikipedia.org/wiki/California_Midwinter_International_Exposition_of_1894#Mechanical_Arts_Building">Midwinter International Exposition</a>
        {' '}
        where the a globe of solid gold was to be the prize. It would have been worth $32 billion.
        Historians however doubt that the story is real.
      </p>
      <p>
        When the California Academy of Science (the place with the fish and penguins!) was last
        remodeled, a construction worker by the name of Walter Döggflava, was moving the dinosaur
        skeleton.  He found a corroded brass cylinder—he thought it was junk and dropped it in his
        truck.  Mr. Döggflava recalls he needed a doorstop for his kitchen and used that old brass
        cylinder. He used it for a decade until earlier this year he was in for a surprise.  Mr
        Döggflava slammed the door too hard, broke the cylinder, and it revealed a piece of paper
        inside. Mr.  Döggflava thinks the note is some visitor's list of attractions from some past
        exposition. He's been curious about the funny scribbles at the top. Is it
        {' '}<a href="https://en.wikipedia.org/wiki/Gregg_shorthand">shorthand</a>?
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
          (2) daniel boone
        </div>
        <div>
          (3) food
        </div>
        <div>
          (4) bonet tower
        </div>
        <div>
          (5) mining camp
        </div>
        <div>
          (6) music concourse
        </div>
        <div>
          (7) haunted swing
        </div>
        <div>
          (8) eskimo village
        </div>
      </blockquote>
      <AnswerForm correctAnswer="music concourse" linkTo={props.linkTo} currentScreen={props.currentScreen} />

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
    </div>
  );
}

