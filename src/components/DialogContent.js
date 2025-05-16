import React from 'react';

function DialogContent({ children }) {
  return React.createElement(
    'div',
    { className: 'dialog-content' },
    children
  );
}

export default DialogContent;