import React, {Component} from 'react';


const K_WIDTH = 40;
const K_HEIGHT = 40;

const stylez = {
  position: 'absolute',
  width: K_WIDTH / 2,
  height: K_HEIGHT / 2,
  left: -K_WIDTH / 4,
  top: -K_HEIGHT / 4,

  border: '1px #f44336',
  opacity: 0.25,
  borderRadius: K_HEIGHT,
  backgroundColor: 'red',
  color: '#3f51b5',
};

export default ({ text }) => {
  return (
    <div style={stylez}>
      <span className="crimez">{text}</span>
    </div>
  );
};
