import { useRef } from 'react';
import './AnimatedLogo.scss';

function AnimatedLogo() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const handleClick = () => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    svgElement.classList.remove('loading-animation');

    // Trigger reflow to restart the animation
    void svgElement.getBoundingClientRect().width;

    svgElement.classList.add('loading-animation');
  };
  return (
    <div className="wrapper" onClick={handleClick}>
      <svg
        aria-label="logo-RL"
        ref={svgRef}
        className="loading-animation"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1067.34 719.24"
      >
        <path
          className="loading-animation__path1"
          d="M0,719.24V0H306.8Q410.35,0,460.2,50.29T510,204.1Q510,270,485.76,314T415.94,374q41.25,16.61,58.65,50.78t20,106.45l2.58,85v2.93q1.29,64.46,24.49,78.13v22H379q-6.87-15.13-10.52-37.36t-4.51-53l-1.72-75.69q-2.16-66.89-22.13-90.33t-72-23.44H130.2V719.24Z"
        />
        <path
          className="loading-animation__path2"
          d="M130.2,314.45h153q49.84,0,73.27-22.95t23.41-72.26q0-46.87-22.77-71.05T289.18,124h-159Z"
        />

        <path
          className="loading-animation__path3"
          d="M628.2,719.24V0H758.4V586.43h308.94V719.24Z"
        />
      </svg>
    </div>
  );
}

export default AnimatedLogo;
