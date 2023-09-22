import React from 'react';
import './index.scss';

type TAnimatedLetters = {
  letterClass: string;
  strArray: string[];
  idx: number;
};

const AnimatedLetters: React.FC<TAnimatedLetters> = ({
  letterClass,
  strArray,
  idx,
}) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
