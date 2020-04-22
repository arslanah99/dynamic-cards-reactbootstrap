import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Hammer from "hammerjs";
import * as Zoom from "chartjs-plugin-zoom";

const Dankmemes = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="App">
      <h1>Dankmemes</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
            pan: {
              enabled: true,
              mode: "xy",
              speed: 1,
              threshold: 1,
            },
            zoom: {
              enabled: true,
              drag: false,
              mode: "xy",
              limits: {
                max: 1,
                min: 0.5,
              },
              rangeMin: {
                x: 2,
                y: 1,
              },
              rangeMax: {
                x: 10,
                y: 150,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Dankmemes;
