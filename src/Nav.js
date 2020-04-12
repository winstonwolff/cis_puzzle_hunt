import React from 'react';
import './Nav.scss';

export function Nav(props) {
  return (
    <nav className="Nav">
      <a href="/"> Puzzle Hunt </a>
      <a href="answer_form"> Answer Form </a>
    </nav>
  );
}
