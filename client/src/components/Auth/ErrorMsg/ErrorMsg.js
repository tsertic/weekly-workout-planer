import React from 'react';

const ErrorMsg = props => {
  const { msg } = props;

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        top: 5,
        color: '#E52424'
      }}
    >
      {msg}{' '}
    </div>
  );
};

export default ErrorMsg;
