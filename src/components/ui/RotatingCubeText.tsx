import React from 'react';

const RotatingCubeText = () => {
  const words = ['Generations', 'Legacy', 'Excellence', 'Pride'];

  return (
    <h1 className="hero-heading mb-6">
      <div>Build a Home That</div>
      <div className="hero-text-wrapper">
        <span>Stands for&nbsp;</span>
        <span className="cube-container">
          <span className="cube">
            {words.map((word, index) => (
              <span key={index} className={`face face-${index + 1}`}>
                {word}
              </span>
            ))}
          </span>
        </span>
      </div>
    </h1>
  );
};

export default RotatingCubeText;
