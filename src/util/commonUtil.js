import { ROCK, PAPER, SCISSOR, BLINDFOLD } from './constants';
import RockImg from '../images/rock.png';
import PaperImg from '../images/paper.png';
import ScissorsImg from '../images/scissors.png';
import BlindfoldImg from '../images/blindfold.png';

export const getRandomChoice = () => {
  var choice = Math.random();
  if (choice < 0.34) {
    choice = ROCK;
  } else if (choice >= 0.34 && choice <= 0.67) {
    choice = PAPER;
  } else {
    choice = SCISSOR;
  }
  return choice;
};

export const getChoiceImage = choice => {
  if (choice === ROCK) return RockImg;
  if (choice === PAPER) return PaperImg;
  if (choice === SCISSOR) return ScissorsImg;
  if (choice === BLINDFOLD) return BlindfoldImg;
};
