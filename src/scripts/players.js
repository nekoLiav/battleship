import { gameBoardFactory } from "./gameBoardFactory";

const players = {
  player: gameBoardFactory('player'),
  computer: gameBoardFactory('computer'),
}

export { players };