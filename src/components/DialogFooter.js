import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from './Button';

function DialogFooter({ buttons = [], info }) {
  const footerChildren = [];

  if (info) {
    footerChildren.push(
      React.createElement(
        'div',
        { className: 'footer-info', key: 'info' },
        info
      )
    );
  }

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

    footerChildren.push(
      React.createElement(
        ButtonGroup,
        { alignment: 'right', key: 'button-group' },
        buttonElements
      )
    );
  }

  return React.createElement(
    'div',
    { className: 'dialog-footer' },
    footerChildren
  );
}

export default DialogFooter;