const ship = (shipLength, shipType) => {
  const type = shipType;
  // Populate an array with 0s for hit/sunk detection
  const shipArray = [];
  for (let i = 0; i < shipLength; i++) {
    shipArray.push(0);
  }
  // Flip the array 0s to 1s if hit is detected
  const hit = (n) => {
    shipArray[n] = 1;
  };
  // If the sum of the array's elements is equal to its length,
  // this implies that it is filled with 1s, or fully 'hit'
  const isSunk = () => {
    const shipHitsArray = shipArray.reduce(
      (prev, cur) => prev + cur);
      if (shipHitsArray === shipArray.length) {
        return 'deth';
      }
  };
  return { type, shipArray, hit, isSunk }
};

export { ship };