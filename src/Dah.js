import React from 'react';
import { Dit } from './Dit.js'

/* Render morse code, but replacing periods with dots,
 * and keeping word boundaries on the same line.
 *
 * https://morsify.net
 */
export function Dah(props) {
  let dotsDashes = props.code
  dotsDashes = dotsDashes.replace(/\./g, '•' )
  dotsDashes = dotsDashes.replace(/ /g, '\xA0' )
  dotsDashes = dotsDashes.replace(/\//g, '/|' )
  const words = dotsDashes.split('|')

  return (
    <div className="Dah">
      { words.map( word => (<Dit> { word } </Dit>)) }
    </div>
  )
}
