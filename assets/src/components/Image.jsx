// components/Image.jsx
import React from 'react';

function Image({ src, alt }) {
  return (
    <a href={src.replace('_th', '')}>
      <img src={src} alt={alt} />
    </a>
  );
}

export default Image;
