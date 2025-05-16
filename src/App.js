import React, { useState } from 'react';
import DialogWindow from './components/DialogWindow';

function App() {
  const [dialog1Open, setDialog1Open] = useState(false);
  const [dialog2Open, setDialog2Open] = useState(false);
  const [dialog3Open, setDialog3Open] = useState(false);

  return React.createElement(
    'div',
    { className: 'app' },
    [
      React.createElement('h1', { key: 'title' }, 'Dialog Component'),
      
      React.createElement(
        'button',
        { 
          key: 'btn1',
          onClick: () => setDialog1Open(true) 
        },
        'Open Dialog (Header Buttons)'
      ),
      
      React.createElement(
        'button',
        { 
          key: 'btn2',
          onClick: () => setDialog2Open(true) 
        },
        'Open Dialog (Footer Buttons)'
      ),
      
      React.createElement(
        'button',
        { 
          key: 'btn3',
          onClick: () => setDialog3Open(true) 
        },
        'Open Dialog (All Features)'
      ),

      // Dialog 1 - Header buttons only
      React.createElement(
        DialogWindow,
        {
          key: 'dialog1',
          isOpen: dialog1Open,
          onClose: () => setDialog1Open(false),
          headerProps: {
            icon: 'ℹ️',
            title: 'Information Dialog',
            buttons: [
              { label: 'Close', onClick: () => setDialog1Open(false), variant: 'secondary' },
              { label: 'Help', onClick: () => alert('Help clicked!') }
            ]
          },
          contentProps: {
            children: React.createElement('p', null, 'This dialog has buttons only in the header.')
          }
        }
      ),

      // Dialog 2 - Footer buttons only
      React.createElement(
        DialogWindow,
        {
          key: 'dialog2',
          isOpen: dialog2Open,
          onClose: () => setDialog2Open(false),
          headerProps: {
            icon: '⚠️',
            title: 'Warning Dialog'
          },
          contentProps: {
            children: React.createElement('p', null, 'This dialog has buttons only in the footer.')
          },
          footerProps: {
            buttons: [
              { label: 'Cancel', onClick: () => setDialog2Open(false), variant: 'secondary' },
              { label: 'Confirm', onClick: () => alert('Confirmed!') }
            ]
          }
        }
      ),

      // Dialog 3 - All features
      React.createElement(
        DialogWindow,
        {
          key: 'dialog3',
          isOpen: dialog3Open,
          onClose: () => setDialog3Open(false),
          headerProps: {
            icon: '✨',
            title: 'Complete Dialog',
            buttons: [
              { label: 'X', onClick: () => setDialog3Open(false), variant: 'secondary' },
              { label: 'Settings', onClick: () => alert('Settings clicked!') }
            ]
          },
          contentProps: {
            children: React.createElement(
              'div',
              null,
              [
                React.createElement('h3', { key: 'h3' }, 'Complete Dialog'),
                React.createElement('p', { key: 'p1' }, 'This dialog demonstrates all features:'),
                React.createElement(
                  'ul',
                  { key: 'ul' },
                  [
                    React.createElement('li', { key: 'li1' }, 'Header with icon, title and buttons'),
                    React.createElement('li', { key: 'li2' }, 'Content area'),
                    React.createElement('li', { key: 'li3' }, 'Footer with buttons and info text')
                  ]
                )
              ]
            )
          },
          footerProps: {
            buttons: [
              { label: 'No', onClick: () => setDialog3Open(false), variant: 'secondary' },
              { label: 'Maybe', onClick: () => alert('Maybe clicked!') },
              { label: 'Yes', onClick: () => alert('Yes clicked!') }
            ],
            info: 'Additional information'
          }
        }
      )
    ]
  );
}

export default App;