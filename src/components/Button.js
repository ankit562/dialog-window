import React from 'react';

function Button({ children, onClick, variant = 'primary' }) {
  return React.createElement(
    'button',
    {
      className: `button ${variant}`,
      onClick: onClick
    },
    children
  );
}

export default Button;