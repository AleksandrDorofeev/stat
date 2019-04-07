import React, { Component } from "react";
import "./AdminStatistics.scss";

import ProgressBar from "./ProgressBar";
import { WritingsCharts, ReportsCharts, WorkCharts } from "./DonutCharts";

class AdminStatistics extends Component {
  render() {
    return (
      <div className="statistics">
        <h1 className="statistics__title">Календарь конкурса</h1>
        <ProgressBar />
        <div className="statistics__charts-container">
          <div
            className="statistics__charts-item"
            style={{ flex: "1", marginLeft: "-32px" }}
          >
            <span className="statistics__charts-item__title-1">СОЧИНЕНИЯ</span>
            <WritingsCharts />
            <span className="statistics__charts-item__data">
              Предоставили
              <br /> 15 субъектов РФ из 85
            </span>
          </div>
          <div className="statistics__charts-item" style={{ flex: "1" }}>
            <span
              className="statistics__charts-item__title-2"
              style={{ marginLeft: "-40px"}}
            >
              ОТЧЕТЫ
            </span>
            <ReportsCharts />
            <span className="statistics__charts-item__data">
              Предоставили
              <br /> 15 субъектов РФ из 85
            </span>
          </div>
          <div className="statistics__charts-item" style={{ flex: "2" }}>
            <span
              className="statistics__charts-item__title-3"
              style={{ marginLeft: "87px"}}
            >
              РАБОТА ЭКСПЕРТОВ
            </span>
            <WorkCharts />
            <div className="statistics__charts-item__data-right">
              <div className="statistics__charts-item__data-container">
                <div
                  className="statistics__charts-item__data-container__color"
                  style={{ backgroundColor: "#0195e1" }}
                />
                <span>Непроверенных работ (92)</span>
              </div>
              <div className="statistics__charts-item__data-container">
                <div
                  className="statistics__charts-item__data-container__color"
                  style={{ backgroundColor: "#33afe7" }}
                />
                <span>Работ, проверенных 1 экспертом (35)</span>
              </div>
              <div className="statistics__charts-item__data-container">
                <div
                  className="statistics__charts-item__data-container__color"
                  style={{ backgroundColor: "#77c1f3" }}
                />
                <span>Работ, проверенных 2 экспертами (83)</span>
              </div>
              <div className="statistics__charts-item__data-container">
                <div
                  className="statistics__charts-item__data-container__color"
                  style={{ backgroundColor: "#394b93" }}
                />
                <span>Работ, проверенных 3 экспертами (215)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminStatistics;
