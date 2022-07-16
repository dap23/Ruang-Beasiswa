import React from "react";
import styles from "./chart.module.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Chart = () => {
  const data = [
    { name: "Kota", uv: 400, pv: 2400, amt: 2400 },
    { name: "Daerah", uv: 400, pv: 2400, amt: 2400 },
    { name: "Nasional", uv: 400, pv: 2400, amt: 2400 },
  ];
  return (
    <div className={styles.container}>
      <h3>Most Applied Scholarship</h3>
      <div className={styles.chart}>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Chart;
