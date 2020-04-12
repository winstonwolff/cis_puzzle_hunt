import React from 'react';
import './puzzle.scss';
import { Dit } from './Dit.js';

export function CalAcademy(props) {
  return (
    <div className="puzzle CalAcademy">
      <p>
            Location Clue: California Academy Lobby
      </p>
      <p>
            Written Clue:
      </p>
      <blockquote>
        <p>
          Location: Cal Academy Lobby
        </p>
        <p>
          Puzzle: 
          <blockquote>
            <Dit> –•–•   –––   ••–   –•   –   / </Dit>
            <Dit> –••   ••   –•   –––   •••   •–   ••–   •–•   / </Dit>
            <Dit> –   –––   •   •••   / </Dit>
            <Dit> –   –––   / </Dit>
            <Dit> –•–•   ••••   –––   –––   •••   • </Dit>
          </blockquote>
        </p>
        <div>
          (1) arboretum bridge
        </div>
        <div>
          (2) de young tower
        </div>
        <div>
          (3) new panhandle playground
        </div>
        <div>
          (4) twirl and dip
        </div>
        <div>
          (5) Robin Williams meadow
        </div>
        <div>
          (6) tulips near windmill
        </div>
        <div>
          (7) bison
        </div>
        <div>
          (8) paddles
        </div>
      </blockquote>
    </div>
  );
}

