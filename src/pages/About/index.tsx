import React from 'react';
import { Carousel, Card } from '../../components/Carousel';
import { Link } from 'react-router-dom';
import './index.scss';

const About: React.FC = () => {
  const CARDS = [
    {
      imgSrc: '/assets/images/selfie.webp',
      title: 'climbing selfie in alps',
    },
    {
      imgSrc: '/assets/images/boulder_tatry.webp',
      title: 'bouldering in High tatras',
    },
    {
      imgSrc: '/assets/images/family.webp',
      title: 'family',
    },
    {
      imgSrc: '/assets/images/repiska.webp',
      title: 'climbing in repiska',
    },

    {
      imgSrc: '/assets/images/sunset.jpg',
      title: 'watching sunset',
    },

    {
      imgSrc: '/assets/images/summit.webp',
      title: 'summit in alps',
    },
    {
      imgSrc: '/assets/images/boulder_ME.webp',
      title: 'European championship boulder',
    },
    // {
    //   imgSrc: '/assets/images/boulder_Himalayas.webp',
    //   title: 'bouldering in Himalayas',
    // },
    {
      imgSrc: '/assets/images/skialp.webp',
      title: 'skitouring with daugther',
    },
  ];
  return (
    <>
      <div className="about-page">
        <div className="about-container">
          <div className="text-zone">
            <h1>Nice to meet you!</h1>
            <p>
              I'm Robert,{' '}
              <Link to="/skills" className="p-link">
                skilled
              </Link>{' '}
              front-end developer with a deep-rooted{' '}
              <span className="bold">passion for problem-solving </span>
              and an enduring ambition to be amongst the best in the industry.
              In the professional sphere, I am recognized for developing
              functional and aesthetically pleasing web solutions.
            </p>
            <p>
              My motivation is fueled by a powerful combination of an unyielding{' '}
              <span className="bold">commitment to excellence</span> and{' '}
              <span className="bold">unbreakable mindset</span>. I value
              <span className="bold"> teamwork</span> and consistently
              collaborate well with others to attain shared objectives and best
              possible solutions.
            </p>
            <p>
              Outside the coding arena, I am a passionate rock climber,
              <span className="bold"> constantly challenging myself</span> to
              reach new heights. Moreover, I take immense pride in being a
              devoted father, a role that has enriched my life in countless
              ways. I live with my family in Martin, in the heart of Slovakia.
              Feel free to explore my portfolio and{' '}
              <Link to="/contact" className="p-link">
                get in touch
              </Link>{' '}
              if you'd like to collaborate or just have a chat.
            </p>
            <p>Thank you for stopping by!</p>
          </div>

          <div className="carousel-container">
            <Carousel>
              {CARDS.map((card) => (
                <Card
                  title={card.title}
                  key={card.title}
                  imgSrc={card.imgSrc}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
