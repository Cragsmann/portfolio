import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './index.scss';

const Contact: React.FC = () => {
  // const [letterClass, setLetterClass] = useState<string>('text-animate');
  const form = useRef<HTMLFormElement>(null);
  const [imageSrc, setImageSrc] = useState(
    'src/assets/images/nebula_desktop.webp'
  );

  const handleResize = () => {
    if (window.innerWidth <= 1200) {
      setImageSrc('src/assets/images/nebula_mobile.png');
    } else if (window.innerWidth >= 1200) {
      setImageSrc('src/assets/images/nebula_desktop.webp');
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_rhdpsdm',
          'template_rsjg4or',
          form.current,
          'qh-ox5yRCjGq-RSGp'
        )
        .then(
          () => {
            alert('Message successfully sent!');
            if (form.current) {
              form.current.reset();
            }
          },
          () => {
            alert('Failed to send the message, please try again');
          }
        );
    }
  };

  return (
    <>
      <div className="contact-page">
        <div className="contact-container">
          <h1 className="contact-h1">
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            /> */}
            Let's work together
          </h1>
          <h2 className="contact-h2">
            to create exceptional digital experiences.
          </h2>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SUBMIT" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="contact-image">
          <img id="responsive-image" src={imageSrc} alt="nebula" />
        </div>
      </div>
    </>
  );
};

export default Contact;
