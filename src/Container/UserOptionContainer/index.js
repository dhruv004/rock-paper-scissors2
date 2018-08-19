import React from 'react';
import './index.css';

import { ROCK, PAPER, SCISSOR, BLINDFOLD } from '../../util/constants';
import { getChoiceImage } from '../../util/commonUtil';

const userOptionContainer = ({ emitSelectedOption }) => {
  return (
    <div className="container">
      <div className="choice-text">Select one of the options</div>
      <div className="img-container">
        <img
          className="option-img"
          src={getChoiceImage(ROCK)}
          alt="Not found"
          onClick={() => emitSelectedOption(ROCK)}
        />
        <img
          className="option-img"
          src={getChoiceImage(PAPER)}
          alt="Not found"
          onClick={() => emitSelectedOption(PAPER)}
        />
        <img
          className="option-img"
          src={getChoiceImage(SCISSOR)}
          alt="Not found"
          onClick={() => emitSelectedOption(SCISSOR)}
        />
      </div>
      <div className="blindfold-container">
        <span className="blindfold-text">Play Blindfolded!</span>
        <img
          className="blindfold-img"
          src={getChoiceImage(BLINDFOLD)}
          alt="Not Found"
          onClick={() => emitSelectedOption(null, true)}
        />
        <br />
        (comp vs comp)
      </div>
    </div>
  );
};

export default userOptionContainer;
