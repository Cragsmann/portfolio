import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Layout from './layout/Layout/Layout';
import Notfound from './pages/NotFound/NotFoundPage';
import Loader from './layout/Loader/Loader';

const Home = lazy(() => import('./pages/Home/HomePage'));
const About = lazy(() => import('./pages/About/AbouPaget'));
const Contact = lazy(() => import('./pages/Contact/ContactPage'));
const Skills = lazy(() => import('./pages/Skills/SkillsPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
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
