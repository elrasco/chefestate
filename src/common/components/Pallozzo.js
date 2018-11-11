import React from 'react';

const Pallozzo = ({ children, radius = 50, background = 'white', boxShadow = '0 3px 6px rgba(0, 0, 0, 0.16)' }) => (
  <span
    style={{
      lineHeight: `${radius * 2}px`,
      width: `${radius * 2}px`,
      height: `${radius * 2}px`,
      borderRadius: '50%',
      background,
      boxShadow,
      verticalAlign: 'middle',
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <span>{children}</span>
  </span>
);

export default Pallozzo;
