import React from 'react';

const RotatingCubeText = () => {
  const words = ['Generations', 'Legacy', 'Excellence', 'Pride'];

  return (
    <h1 className="flex flex-col w-full mb-8 pt-4 items-start gap-y-4">
      {/* Line 1: Left aligned */}
      <div className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-harriet-700 whitespace-nowrap text-left">
        Build a Home That
      </div>

      {/* Line 2: Left aligned */}
      <div className="flex flex-wrap justify-start items-center gap-2 sm:gap-6 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-harriet-700 -mt-2">
        <span>Stands for</span>
        <span className="cube-container italic font-serif">
          {/* Phantom element to set width based on longest word */}
          <span className="invisible opacity-0" aria-hidden="true">Generations</span>
          <span className="cube">
            {words.map((word, index) => (
              <span key={index} className={`face face-${index + 1} text-left`}>
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
