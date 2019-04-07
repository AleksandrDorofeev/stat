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
        <div className="progress-bar__container-date__container">
          <div
            className="progress-bar__container-date__item"
            // style={{
            //   left: `${lenght -
            //     (lenght > Math.floor(49) ? 5 * 1.17647059 : 3 / 1.17647059)}%`
            // }}
          >
            {/* {`${lenght !== 100 && lenght !== 0 ? lenght + `%` : ``}`} */}
            {/* {lenght}% */}
            01 апреля 2019 г.
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
        <div className="progress-bar__container-name">
          <div className="progress-bar__container-name__item">
            <span className="progress-bar__container-name__item__text">
              Формирование списка ответственных лиц за организацию и проведение
              регионального этапа Конкурса
            </span>
          </div>
          <div className="progress-bar__container-name__item">
            <span className="progress-bar__container-name__item__text">
              Прием работ на федеральный этап Конкурса
            </span>
          </div>
          <div className="progress-bar__container-name__item">
            <span className="progress-bar__container-name__item__text">
              Подведение итогов Конкурса
            </span>
          </div>
          <div className="progress-bar__container-name__item">
            <span className="progress-bar__container-name__item__text">
              Награждение победителей
            </span>
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
