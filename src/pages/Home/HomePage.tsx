import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import { autoType } from './components/AutoType';

const Home = () => {
  const [isResolved, setIsResolved] = useState(false);
  const subheading = useRef<HTMLHeadingElement | null>(null);

  const spanText = (text: HTMLElement | null): void => {
    if (!text) return;

    const string = text.innerText;
    let spanned = '';
    for (let i = 0; i < string.length; i++) {
      if (string.substring(i, i + 1) === ' ') {
        spanned += string.substring(i, i + 1);
      } else {
        spanned += `<span className='text-animate-hover'>${string.substring(
          i,
          i + 1
        )}</span>`;
      }
    }
    text.innerHTML = spanned;
  };

  useEffect(() => {
    autoType('.type-heading', 100)
      .then(() => {
        setIsResolved(true);
        spanText(subheading.current);
      })
      .catch((error) =>
        console.error('An error occurred during execution:', error)
      );
  }, []);

  const imagesToPreload = [
    '/assets/images/selfie.webp',
    '/assets/images/nebula_desktop.webp',
    '/assets/images/nebula_mobile.png',
  ];

  imagesToPreload.forEach((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
  });

  return (
    <div className="home-page">
      <div className="container-homepage">
        <div className="top-margin"></div>

        <h1 className="hello-world ">HELLO WORLD!</h1>

        <div className="type-heading">
          <h2 className="heading  text-js">I'M ROBERT LUBY</h2>
        </div>
        <h3
          ref={subheading}
          className={isResolved ? 'subheading' : 'invisible'}
        >
          FRONT-END DEVELOPER
        </h3>
        <div className="container-homepage-btns">
          <Link to="/about" className="flat-button-info">
            About me
          </Link>
          <Link to="/contact" className="flat-button-contact">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
