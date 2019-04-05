import React, { Component } from 'react';
import logo from './logo.svg';
import './AdminStatistics.scss';

import ProgressBar from "./ProgressBar";
import DonutCharts from "./DonutCharts";

class AdminStatistics extends Component {
  render() {
    return (
      <div className="statistics">
      <h1 className="statistics__title">Календарь конкурса</h1>
        <ProgressBar />
        <DonutCharts />
      </div>
    );
  }
}

export default AdminStatistics;
