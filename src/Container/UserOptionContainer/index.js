import React, { Component } from 'react';
import './index.css';

import { ROCK, PAPER, SCISSOR } from '../../constants';
import RockImg from '../../images/rock.png';
import PaperImg from '../../images/paper.png';
import ScissorsImg from '../../images/scissors.png';

class userOptionContainer extends Component {
  emitSelectedOption = userChoice => {
    console.log(userChoice);
    this.props.emitSelectedOption(userChoice);
  };

  render() {
    return (
      <div className="container">
        <div className="choice-text">Select one of the options</div>
        <div className="img-container">
          <img
            className="option-img"
            src={RockImg}
            alt="Not found"
            onClick={() => this.emitSelectedOption(ROCK)}
          />
          <img
            className="option-img"
            src={PaperImg}
            alt="Not found"
            onClick={() => this.emitSelectedOption(PAPER)}
          />
          <img
            className="option-img"
            src={ScissorsImg}
            alt="Not found"
            onClick={() => this.emitSelectedOption(SCISSOR)}
          />
        </div>
      </div>
    );
  }
}

export default userOptionContainer;
