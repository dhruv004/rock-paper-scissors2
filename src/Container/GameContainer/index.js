import React, { Component } from 'react';
import './index.css';
import indexImage from '../../images/index.jpg';
import PlayButton from '../../Components/play-button/index';
import UserOptionContainer from '../UserOptionContainer/index';
import WinnerContainer from '../WinnerContainer/index';
import {
  ROCK,
  PAPER,
  SCISSOR,
  NEW_GAME,
  SELECT_OPTION,
  SHOW_WINNER
} from '../../constants';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStage: NEW_GAME,
      userChoice: '',
      computerChoice: ''
    };
  }

  componentDidMount = () => {
    this.getComputerOption();
  };

  getComputerOption = () => {
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = ROCK;
    } else if (computerChoice >= 0.34 && computerChoice <= 0.67) {
      computerChoice = PAPER;
    } else {
      computerChoice = SCISSOR;
    }

    this.setState({
      computerChoice: computerChoice
    });
  };

  getUserOption = userChoice => {
    this.setState({
      userChoice: userChoice,
      currentStage: SHOW_WINNER
    });
  };

  startGame = () => {
    this.setState({
      currentStage: SELECT_OPTION
    });
    this.getComputerOption();
  };

  render() {
    let { currentStage, userChoice, computerChoice } = this.state;
    let currentView = (
      <img className="index-image" src={indexImage} alt="Not found" />
    );
    if (currentStage === NEW_GAME) {
      currentView = (
        <img className="index-image" src={indexImage} alt="Not found" />
      );
    } else if (currentStage === SELECT_OPTION) {
      currentView = (
        <UserOptionContainer emitSelectedOption={this.getUserOption} />
      );
    } else if (currentStage === SHOW_WINNER) {
      currentView = (
        <WinnerContainer
          userChoice={userChoice}
          computerChoice={computerChoice}
        />
      );
    }
    return (
      <div>
        <div className="current-stage-container">{currentView}</div>
        <div>
          <PlayButton text="New Game" callback={this.startGame} />
        </div>
      </div>
    );
  }
}

export default GameContainer;
