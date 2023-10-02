import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Layout from './layout/Layout/Layout';
import Notfound from './pages/NotFound/NotFoundPage';

const Home = lazy(() => import('./pages/Home/HomePage'));
const About = lazy(() => import('./pages/About/AbouPaget'));
const Contact = lazy(() => import('./pages/Contact/ContactPage'));
const Skills = lazy(() => import('./pages/Skills/SkillsPage'));

function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={<div />}>
          <Routes>
            <Route index element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Skills />} path="/skills" />
            <Route element={<Notfound />} path="*" />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
