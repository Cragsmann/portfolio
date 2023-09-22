// import React, { useState, useEffect, useRef } from 'react';

// interface BallProps {
//   size: number;
//   boundary: { width: number; height: number };
// }

// const PinBall: React.FC<BallProps> = ({ size, boundary }) => {
//   const [position, setPosition] = useState<{ x: number; y: number }>({
//     x: 100,
//     y: 100,
//   });
//   const [velocity, setVelocity] = useState<{ x: number; y: number }>({
//     x: 0,
//     y: 0,
//   });
//   const lastPosition = useRef<{ x: number; y: number }>(position);
//   const lastTime = useRef<number>(Date.now());
//   const isDragging = useRef<boolean>(false);

//   useEffect(() => {
//     const moveHandler = (event: MouseEvent) => {
//       const now = Date.now();
//       const dt = (now - lastTime.current) / 1000;
//       lastTime.current = now;

//       setVelocity({
//         x: (event.clientX - lastPosition.current.x) / dt,
//         y: (event.clientY - lastPosition.current.y) / dt,
//       });

//       setPosition({ x: event.clientX, y: event.clientY });
//       lastPosition.current = { x: event.clientX, y: event.clientY };
//     };

//     const downHandler = () => {
//       isDragging.current = true;
//     };

//     const upHandler = () => {
//       isDragging.current = false;
//     };

//     window.addEventListener('mousedown', downHandler);
//     window.addEventListener('mouseup', upHandler);
//     window.addEventListener('mousemove', moveHandler);

//     return () => {
//       window.removeEventListener('mousedown', downHandler);
//       window.removeEventListener('mouseup', upHandler);
//       window.removeEventListener('mousemove', moveHandler);
//     };
//   }, []);

//   useEffect(() => {
//     const animate = () => {
//       if (!isDragging.current) {
//         let newX = position.x + velocity.x * 0.016;
//         let newY = position.y + velocity.y * 0.016;

//         if (newX < 0 || newX > boundary.width - size) {
//           setVelocity((prev) => ({ ...prev, x: prev.x * -0.7 }));
//         }

//         if (newY < 0 || newY > boundary.height - size) {
//           setVelocity((prev) => ({ ...prev, y: prev.y * -0.7 }));
//         }

//         newX = Math.min(Math.max(newX, 0), boundary.width - size);
//         newY = Math.min(Math.max(newY, 0), boundary.height - size);

//         setPosition({ x: newX, y: newY });
//         setVelocity((prev) => ({ x: prev.x * 0.99, y: prev.y * 0.99 }));
//       }

//       requestAnimationFrame(animate);
//     };

//     animate();
//   }, [boundary.height, boundary.width, size, position, velocity]);

//   return (
//     <div
//       style={{
//         width: size,
//         height: size,
//         backgroundColor: 'blue',
//         borderRadius: '50%',
//         position: 'absolute',
//         left: position.x - size / 2,
//         top: position.y - size / 2,
//       }}
//     ></div>
//   );
// };

export const Ball: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* <PinBall
        size={50}
        boundary={{ width: window.innerWidth, height: window.innerHeight }}
      /> */}
    </div>
  );
};

export default Ball;
