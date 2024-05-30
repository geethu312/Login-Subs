import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import "./Graph.css";

const data = [
  { name: "0", sales: 50 },
  { name: "", sales: 70 },
  { name: "", sales: 50 },
  { name: "7D", sales: 80 },
  { name: "15D", sales: 53 },
  { name: "1M", sales: 63 },
  { name: "6M", sales: 74 },
  { name: "1Y", sales: 78 },
];

const SimpleLineChart = () => (
  <div className="graph-container">
    <p className="graph-title">
      Engagement Rate
      <span className="graph-buttons">
        <button className="graph-btn all">All</button>
        <button className="graph-btn export">Export</button>
      </span>
    </p>
    <div className="chart-wrapper">
      <LineChart width={700} height={180} data={data}>
        <XAxis dataKey="name" tickLine={false} />
        <YAxis tick={false} />
        <Tooltip />
        <Line
          type="linear"
          dataKey="sales"
          stroke="#1371ff"
          dot={false}
          activeDot={false}
        />
      </LineChart>
    </div>
  </div>
);

export default SimpleLineChart;
