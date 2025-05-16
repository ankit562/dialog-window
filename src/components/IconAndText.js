import React from 'react';

function IconAndText({ icon, text }) {
  return React.createElement(
    'div',
    { className: 'icon-and-text' },
    [
      React.createElement('span', { className: 'icon', key: 'icon' }, icon),
      React.createElement('span', { className: 'text', key: 'text' }, text)
    ]
  );
}

export default IconAndText;