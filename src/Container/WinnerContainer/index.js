import React from 'react';
import getWinner from '../../util/rules';
import './index.css';

import { getChoiceImage } from '../../util/commonUtil';

const WinnerContainer = ({ userChoice, computerChoice }) => {
  let isDraw = false;
  let isWinner = false;
  if (userChoice === computerChoice) isDraw = true;
  if (!isDraw) {
    isWinner =
      userChoice === getWinner(userChoice, computerChoice) ? true : false;
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-container">
          <img
            className="card-image"
            src={getChoiceImage(userChoice)}
            alt="Not found"
          />
          <h4>
            <b>You selected: {userChoice}</b>
          </h4>
        </div>
      </div>
      <div className="card">
        <div className="card-container">
          <img
            className="card-image"
            src={getChoiceImage(computerChoice)}
            alt="Not found"
          />
          <h4>
            <b>Computer selected: {computerChoice}</b>
          </h4>
        </div>
      </div>
      <div className="win-text">
        {isDraw ? (
          <h4>Its a draw</h4>
        ) : isWinner ? (
          <h4>You win</h4>
        ) : (
          <h4>You loose</h4>
        )}
      </div>
    </div>
  );
};

export default WinnerContainer;
