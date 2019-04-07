import React, { Component } from "react";
import { VictoryPie, VictoryLabel } from "victory";

export class WritingsCharts extends Component {
  render() {
    return (
      <div>
        <svg width="205" height="205" viewBox="50 50 85 85">
          <VictoryPie
            standalone={false}
            width={185}
            height={185}
            colorScale={["#0295e2", "#394b93"]}
            data={[120, 150]}
            innerRadius={20}
            // labelRadius={51}
            // style={{ labels: { fontSize: 20, fill: "white" } }}
          />
          <VictoryLabel
            textAnchor="middle"
            style={{
              fontSize: 18,
              color: "#39404c",
              fontFamily: "Roboto Condensed",
              fontWeight: "700"
            }}
            x={93}
            y={93}
            text="18%"
          />
        </svg>
      </div>
    );
  }
}

export class ReportsCharts extends Component {
  render() {
    return (
      <div>
        <svg width="205" height="205" viewBox="50 50 85 85">
          <VictoryPie
            standalone={false}
            width={185}
            height={185}
            colorScale={["#29adc2", "#394b93"]}
            data={[{ x: 1, y: 120 }, { x: 2, y: 150 }]}
            innerRadius={20}
            // labelRadius={51}
            // style={{ labels: { fontSize: 20, fill: "white" } }}
          />
          <VictoryLabel
            textAnchor="middle"
            style={{
              fontSize: 18,
              color: "#39404c",
              fontFamily: "Roboto Condensed",
              fontWeight: "700"
            }}
            x={93}
            y={93}
            text="18%"
          />
        </svg>
      </div>
    );
  }
}

export class WorkCharts extends Component {
  render() {
    return (
      <div>
        <svg width="205" height="205" viewBox="50 50 85 85">
          <VictoryPie
            standalone={false}
            width={185}
            height={185}
            colorScale={["#0295e2", "#34b0e8", "#78c1f4", "#394b93"]}
            data={[20, 50, 70, 150 ]}
            innerRadius={20}
            // labelRadius={51}
            // style={{ labels: { fontSize: 20, fill: "white" } }}
          />
          <VictoryLabel
            textAnchor="middle"
            style={{
              fontSize: 18,
              color: "#39404c",
              fontFamily: "Roboto Condensed",
              fontWeight: "700"
            }}
            x={93}
            y={93}
            text="425"
          />
        </svg>
      </div>
    );
  }
}


