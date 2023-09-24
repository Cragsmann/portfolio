import React, { ReactNode, useState, useRef } from 'react';

const MAX_VISIBILITY = 3;

type CardProps = {
  title?: string | number;
  imgSrc?: string;
};

export const Card: React.FC<CardProps> = ({ title, imgSrc }) => (
  <div className="card">
    {imgSrc && (
      <img
        className="card-img"
        src={imgSrc}
        alt={title ? title.toString() : 'Card image'}
      />
    )}
  </div>
);
type CarouselProps = {
  children: ReactNode;
};

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [active, setActive] = useState<number>(0);
  const touchStartX = useRef<number>(0);
  const count = React.Children.count(children);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.touches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 50) {
      // Threshold
      if (diffX > 0 && active < count - 1) {
        setActive((prev) => prev + 1);
      } else if (diffX < 0 && active > 0) {
        setActive((prev) => prev - 1);
      }
      touchStartX.current = touchEndX; // Reset for the next onTouchMove event
    }
  };
  return (
    <div
      className="carousel"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    >
      {active > 0 && (
        <button
          className="left carousel-nav"
          onClick={() => setActive((i) => i - 1)}
          aria-label="Previous Slide"
        >
          <svg
            className="carousel-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          key={i}
          style={
            {
              '--active': `${i === active ? 1 : 0}`,
              '--offset': `${(active - i) / 3}`,
              '--direction': `${Math.sign(active - i)}`,
              '--abs-offset': `${Math.abs(active - i) / 3}`,
              pointerEvents: active === i ? 'auto' : 'none',
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            } as React.CSSProperties
          }
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className="right carousel-nav"
          onClick={() => setActive((i) => i + 1)}
          aria-label="Next Slide"
        >
          <svg
            className="carousel-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </button>
      )}
    </div>
  );
};
