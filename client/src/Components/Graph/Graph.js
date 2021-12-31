import React, { Component } from "react";
import Chart from "react-apexcharts";

class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: []
          }
        },
        xaxis: {
          labels: {
            formatter: function(val, index) {
              if (index == 1){
                return "Beginner";
              }else if (index == 4) {
                return "pro";
              }else {
                return "";
              }  
            }
          },
            categories: ["Java","Python","Go","JavaScript"],
        },
      },
      series: [
        {
          name: "",
          data: [70, 50, 15, 60],
        }
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="380"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;