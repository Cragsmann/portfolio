import { Outlet } from 'react-router-dom';
import Navbar from '../NavBar';
import './index.scss';
import { useEffect, useState } from 'react';
import ImageSrcContext from '../../context/ImageSrcContext';

const Layout = () => {
  const [imageSrc, setImageSrc] = useState(
    '/assets/images/nebula_desktop.webp'
  );

  const handleResize = () => {
    if (window.innerWidth <= 1200) {
      setImageSrc('/assets/images/nebula_mobile.png');
    } else {
      setImageSrc('/assets/images/nebula_desktop.webp');
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="page">
        <ImageSrcContext.Provider value={imageSrc}>
          <Outlet />
        </ImageSrcContext.Provider>
      </div>
    </div>
  );
};

export default Layout;
