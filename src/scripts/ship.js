export default function ship(shipLength, shipType, shipOwner) {
  const owner = shipOwner;
  const type = shipType;
  const length = shipLength;
  const shipArray = [];

  const hit = (n) => {
    shipArray[n] = 1;
  };

  const isSunk = () => {
    const shipHitsArray = shipArray.reduce(
      (acc, cur) => acc + cur,
    );
    if (shipHitsArray === length) {
      return true;
    } return false;
  };

  const populate = () => {
    for (let i = 0; i < length; i += 1) {
      shipArray.push(0);
    }
  };

  const clean = () => {
    shipArray.splice(0);
    populate();
  };

  populate();

  return {
    owner,
    type,
    length,
    shipArray,
    hit,
    isSunk,
    clean,
  };
}
