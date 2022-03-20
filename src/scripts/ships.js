import { shipFactory } from "./shipFactory";

const ships = {
  carrier: shipFactory(5, 'carrier'),
  battleship: shipFactory(4, 'battleship'),
  destroyer: shipFactory(3, 'destroyer'),
  submarine: shipFactory(3, 'submarine'),
  patrolboat: shipFactory(2, 'patrol boat'),
};

export { ships };