import React from 'react';

function ButtonGroup({ children, alignment = 'right' }) {
  return React.createElement(
    'div',
    { className: `button-group ${alignment}` },
    children
  );
}

export default ButtonGroup;