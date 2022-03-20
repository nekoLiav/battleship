import { gameBoardFactory } from "./gameBoardFactory";

const players = {
  player: gameBoardFactory(),
  computer: gameBoardFactory(),
}

export { players };