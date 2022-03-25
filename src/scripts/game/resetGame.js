import { player, computer } from './players';

export default function resetGame() {
  player.clean();
  computer.clean();
}
