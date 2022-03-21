const shipFactory = (shipLength, shipType, shipOwner) => {

  const owner = shipOwner;

  const type = shipType;

  const length = shipLength;

  const shipArray = [];
  for (let i = 0; i < shipLength; i++) {
    shipArray.push(0);
  }

  const hit = (n) => {
    shipArray[n] = 1;
  };
  // if the sum of all ship array elements are equal to its length, it is sunk
  const isSunk = () => {
    const shipHitsArray = shipArray.reduce(
      (acc, cur) => acc + cur);
      if (shipHitsArray === shipArray.length) {
        return true;
      }
  };

  return { owner, type, length, shipArray, hit, isSunk }
  
};

export { shipFactory };