import React, { Component } from "react";
import "./ProgressBar.scss";

class ProgressBar extends Component {
  state = {
    percentage: 0
  };

  render() {
    const { percentage } = this.state;
    let lenght = 50;
    // Math.floor(this.props.regions.length * 1.17647059);
    return (
      <div className="progress-bar__position">
        <div className="progress-bar__container-percentage">
          <div
            className="progress-bar__container-percentage__container"
            style={{ height: "25px" }}
          >
            <span
              className="progress-bar__container-percentage__slide"
              style={{
                left: `${lenght -
                  (lenght > Math.floor(49) ? 5 * 1.17647059 : 3 / 1.17647059)}%`
              }}
            >
              {`${lenght !== 100 && lenght !== 0 ? lenght + `%` : ``}`}
              {/* {lenght}% */}
            </span>
          </div>
        </div>
        <div className="progress-bar__container">
          {/* <span>Процент наполнения</span> */}
          <div className="progress-bar">
            <div className="progress-bar__cutoff-start" />
            <div className="progress-bar__cutoff-left-center" />
            <div className="progress-bar__cutoff-center" />
            <div className="progress-bar__cutoff-right-center" />
            <div className="progress-bar__cutoff-end" />
            <Filler percentage={lenght} />
          </div>
        </div>
        <div className="progress-bar__container-percentage">
          <div className="progress-bar__container-percentage__container">
            <span>0%</span>
            {/* <span
              className="progress-bar__container-percentage__slide"
              style={{ left: `${lenght - 3}%` }}
            >
              {
                  `${Math.floor(80) > lenght > Math.floor(10) ? lenght+`%` : ``}`
              }
            </span> */}
            <span>100%</span>
          </div>
        </div>
      </div>
    );
  }
}

const Filler = ({ percentage }) => {
  return <div className="filler" style={{ width: `${percentage}%` }} />;
};

export default ProgressBar;