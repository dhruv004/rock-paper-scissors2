import { ROCK, PAPER, SCISSOR } from './constants';

const getWinner = function(firstParam, secondParam) {
  //Rock as firstParam
  if (firstParam === ROCK && secondParam === PAPER) return PAPER;
  if (firstParam === ROCK && secondParam === SCISSOR) return ROCK;

  //Paper as firstParam
  if (firstParam === PAPER && secondParam === ROCK) return PAPER;
  if (firstParam === PAPER && secondParam === SCISSOR) return SCISSOR;

  //Scissors as firstParam
  if (firstParam === SCISSOR && secondParam === PAPER) return SCISSOR;
  if (firstParam === SCISSOR && secondParam === ROCK) return ROCK;
};

export default getWinner;
