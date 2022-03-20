import listeners from "./listeners";
import random from "./random";
import { players } from "./players";
import { ships } from "./ships";

export default function init() {

  listeners();

  random(ships.carrier, players.computer);
  random(ships.battleship, players.computer);
  random(ships.destroyer, players.computer);
  random(ships.submarine, players.computer);
  random(ships.patrolboat, players.computer);
  
}