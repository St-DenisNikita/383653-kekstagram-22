'use strict';
const MIN = -10;
const MAX = 1000;

const lenghtComment = {
  MAX: 140,
};

const getRandomIntInclusive = function (min, max) {
  const RandomArbitrary = Math.trunc(Math.random() * (max - min + 1) + min);

  if (RandomArbitrary <= 0) {
    return 0;
  }

  return RandomArbitrary;
}


const verifyQuantitySymbols = function (commentLenght, maxLenghtComment) {
  if (commentLenght > maxLenghtComment) {
    return false;
  }

  return true;
}

verifyQuantitySymbols(getRandomIntInclusive(MIN, MAX), lenghtComment.MAX);
