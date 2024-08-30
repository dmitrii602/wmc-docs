import React from 'react';

const Link = ({ url, children, showUrl = false }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {showUrl ? url : children}
    </a>
  );
};

export default Link;
