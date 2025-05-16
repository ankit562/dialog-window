import React from 'react';
import DialogHeader from './DialogHeader';
import DialogContent from './DialogContent';
import DialogFooter from './DialogFooter';

function DialogWindow({ 
  isOpen, 
  onClose,
  headerProps = {},
  contentProps = {},
  footerProps = {}
}) {
  if (!isOpen) return null;

  return React.createElement(
    'div',
    { className: 'dialog-overlay' },
    React.createElement(
      'div',
      { className: 'dialog-window' },
      [
        React.createElement(DialogHeader, { ...headerProps, key: 'header' }),
        React.createElement(DialogContent, { ...contentProps, key: 'content' }),
        React.createElement(DialogFooter, { ...footerProps, key: 'footer' })
      ]
    )
  );
}

export default DialogWindow;