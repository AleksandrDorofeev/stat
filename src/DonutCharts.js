import React, { Component } from "react";
import { VictoryPie, VictoryLabel } from "victory";

class DonutCharts extends Component {
  render() {
    return (
      <div>
        <svg viewBox="0 0 105 105">
          <VictoryPie
            standalone={false}
            width={105}
            height={105}
            data={[{ x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }]}
            // innerRadius={18}
            // labelRadius={51}
            style={{ labels: { fontSize: 20, fill: "white" } }}
          />
          <VictoryLabel
            textAnchor="middle"
            style={{ fontSize: 20 }}
            x={200}
            y={200}
            text="Pie!"
          />
        </svg>
      </div>
    );
  }
}

export default DonutCharts;
