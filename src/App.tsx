import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Notfound from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Skills = lazy(() => import('./pages/Skills'));

function App() {
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
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
