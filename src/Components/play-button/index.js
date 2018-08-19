import React from 'react';
import './index.css';

const PlayButton = ({ text, route, callback }) => {
  return (
    <a className="button" href={route} onClick={callback}>
      {text}
    </a>
  );
};

export default PlayButton;
