import Loader from 'react-loaders';
import { Link, Outlet } from 'react-router-dom';
import Button from './components/Button';
import './index.scss';

function Playground() {
  return (
    <div className="playground-container">
      <div className="playground-btns">
        <Link to="/playground/bubble-hunt" className="playgorund-btn-a">
          <Button name="Bubble Hunt"></Button>
        </Link>
        <Link to="/playground/pop-bubbles" className="playgorund-btn-a">
          <Button name="Pop Bubbles"></Button>
        </Link>
        <Link to="/playground/robot" className="playgorund-btn-a">
          <Button name="Robot"></Button>
        </Link>
      </div>
      <Outlet />

      <Loader type="pacman" active />
    </div>
  );
}

export default Playground;
