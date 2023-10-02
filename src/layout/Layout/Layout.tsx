import Navbar from '../NavBar/NavBar';
import './Layout.scss';
import { ReactNode, useEffect, useState } from 'react';
import ImageSrcContext from '../../context/ImageSrcContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
          {children}
        </ImageSrcContext.Provider>
      </div>
    </div>
  );
};

export default Layout;
