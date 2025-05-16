import React from 'react';
import IconAndText from './IconAndText';
import ButtonGroup from './ButtonGroup';
import Button from './Button';

function DialogHeader({ icon, title, buttons = [] }) {
  const headerChildren = [
    React.createElement(IconAndText, { icon, text: title, key: 'icon-text' })
  ];

  if (buttons.length > 0) {
    const buttonElements = buttons.map((button, index) =>
      React.createElement(
        Button,
        {
          key: index,
          onClick: button.onClick,
          variant: button.variant
        },
        button.label
      )
    );

    headerChildren.push(
      React.createElement(
        ButtonGroup,
        { alignment: 'right', key: 'button-group' },
        buttonElements
      )
    );
  }

  return React.createElement(
    'div',
    { className: 'dialog-header' },
    headerChildren
  );
}

export default DialogHeader;