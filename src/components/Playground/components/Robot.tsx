import React, { Component, MouseEvent } from 'react';
import './css/Robot.scss';

interface RobotState {
  droidX: number;
  mouseX: number;
  toTheRight: boolean;
  speed: number;
  accelMod: number;
}

export class Robot extends Component<object, RobotState> {
  constructor(props: object) {
    super(props);

    this.state = {
      droidX: 0,
      mouseX: 0,
      toTheRight: true,
      speed: 2,
      accelMod: 1,
    };
  }

  // Keep track of the mouse position.
  handleMouseMove(event: React.MouseEvent) {
    this.setState({
      mouseX: event.pageX,
    });
  }

  // Speed Mod Bar
  handleSpeedChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (parseFloat(e.target.value)) {
      this.setState({
        speed: parseFloat(e.target.value),
      });
    }
  }

  // Acceleration Mod Bar
  handleAccelChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (parseFloat(e.target.value)) {
      this.setState({
        accelMod: parseFloat(e.target.value),
      });
    }
  }

  // Get moving!
  movement() {
    const { droidX, mouseX, speed, accelMod } = this.state;

    // Need a pretty strict if statement to make sure React doesn't end up in a
    // render loop with all the state changes / re-rendering going on.
    if (Math.abs(Math.round(droidX) - mouseX) !== 1) {
      const distance = mouseX - droidX;
      const acceleration = (Math.abs(distance * accelMod) / 100) * (speed / 2);

      // Move to the right
      if (droidX < mouseX) {
        this.setState({
          droidX: droidX + acceleration,
          toTheRight: true,
        });
      }

      // Move to the left
      else {
        this.setState({
          droidX: droidX - acceleration,
          toTheRight: false,
        });
      }
    }
  }

  // Get some initial movement on the first mount.
  componentDidMount() {
    this.setState({
      mouseX: 300,
    });

    document.addEventListener('mousemove', (e) =>
      this.handleMouseMove(e as unknown as MouseEvent<HTMLElement>)
    );
    setInterval(this.movement.bind(this), 1);
  }

  // Clean up.
  componentWillUnmount() {
    document.removeEventListener('mousemove', (e) => {
      return this.handleMouseMove(e as unknown as MouseEvent<HTMLElement>);
    });
  }

  // Away we go.
  render() {
    const { speed, accelMod, droidX, mouseX, toTheRight } = this.state;

    return (
      <div className="robot-container">
        <div className="config">
          <div className="control-wrap">
            <p>Speed: {speed}</p>
            <input
              type="range"
              min="0"
              max="11"
              step="0.1"
              value={speed}
              onChange={(e) => this.handleSpeedChange(e)}
            />
          </div>
          <div className="control-wrap">
            <p>Acceleration: {accelMod}</p>
            <input
              type="range"
              min="0"
              max="3"
              step="0.1"
              value={accelMod}
              onChange={(e) => this.handleAccelChange(e)}
            />
          </div>
        </div>

        <div
          className="bb8"
          style={{ WebkitTransform: `translateX(${droidX}px)` }}
        >
          <div
            className={'antennas ' + (toTheRight ? 'right' : '')}
            style={{
              WebkitTransform: `translateX(${
                (mouseX - droidX) / 25
              }px) rotateZ(${(mouseX - droidX) / 80}deg)`,
            }}
          >
            <div className="antenna short"></div>
            <div className="antenna long"></div>
          </div>
          <div
            className="head"
            style={{
              WebkitTransform: `translateX(${
                (mouseX - droidX) / 15
              }px) rotateZ(${(mouseX - droidX) / 25}deg)`,
            }}
          >
            <div className="stripe one"></div>
            <div className="stripe two"></div>
            <div className={'eyes ' + (toTheRight ? 'right' : '')}>
              <div className="eye one"></div>
              <div className="eye two"></div>
            </div>
            <div className={'stripe detail ' + (toTheRight ? 'right' : '')}>
              <div className="detail zero"></div>
              <div className="detail zero"></div>
              <div className="detail one"></div>
              <div className="detail two"></div>
              <div className="detail three"></div>
              <div className="detail four"></div>
              <div className="detail five"></div>
              <div className="detail five"></div>
            </div>
            <div className="stripe three"></div>
          </div>
          <div
            className="ball"
            style={{ WebkitTransform: `rotateZ(${droidX / 2}deg)` }}
          >
            <div className="lines one"></div>
            <div className="lines two"></div>
            <div className="ring one"></div>
            <div className="ring two"></div>
            <div className="ring three"></div>
          </div>
          <div className="shadow"></div>
        </div>

        {/* <div className="instructions">
          <p>move your mouse.</p>
        </div> */}
      </div>
    );
  }
}

export default Robot;
