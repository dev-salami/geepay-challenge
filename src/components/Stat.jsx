"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

function Stat() {
  return (
    <div>
      <Bar
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Sales Trends",
              data: [
                7000, 21000, 7000, 28000, 9000, 40000, 9000, 18000, 32000, 7000,
                30000, 26000,
              ],
              backgroundColor: ["#b8f6fa"],

              // borderColor: "orange",

              borderRadius: Number.MAX_VALUE,
              hoverBackgroundColor: ["#34CAA5"],
            },
          ],
        }}
        height={300}
        width={500}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default Stat;
