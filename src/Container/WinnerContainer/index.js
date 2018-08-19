import React, { Component } from 'react';
import getWinner from '../../rules';
import './index.css';

import { ROCK, PAPER, SCISSOR } from '../../constants';
import RockImg from '../../images/rock.png';
import PaperImg from '../../images/paper.png';
import ScissorsImg from '../../images/scissors.png';

class WinnerContainer extends Component {
  getChoiceImage = choice => {
    if (choice === ROCK) return RockImg;
    if (choice === PAPER) return PaperImg;
    if (choice === SCISSOR) return ScissorsImg;
  };

  render() {
    let { userChoice, computerChoice } = this.props;
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
              src={this.getChoiceImage(userChoice)}
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
              src={this.getChoiceImage(computerChoice)}
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
  }
}

export default WinnerContainer;
