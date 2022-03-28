export default function ship(length, type) {
  const hits = [];

  const hit = (i) => {
    hits[i] = 1;
  };

  const sunk = () => {
    if (hits.reduce((acc, cur) => acc + cur) === length) {
      return true;
    }
    return false;
  };

  const populate = () => {
    for (let i = 0; i < length; i += 1) {
      hits.push(0);
    }
  };

  const clean = () => {
    hits.splice(0);
    populate();
  };

  populate();

  return {
    type,
    length,
    hits,
    hit,
    sunk,
    clean,
  };
}
