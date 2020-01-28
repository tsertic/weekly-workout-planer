import React from 'react';

const Backdrop = ({ onClick }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100%',
        background: 'rgba(0,0,0,0.7)',
        zIndex: 20
      }}
      onClick={onClick}
    ></div>
  );
};

export default Backdrop;
