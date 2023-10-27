import { Link } from "react-router-dom";
import "./boxChart.scss";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  icon: string;
  title: string;
  number: number | string;
  chartData: object[];
  dataKey: string;
  color: string;
  percentage: number;
};

function BoxChart(props: Props) {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1 className="value">{props.number}</h1>
        <Link to={"/"} className="link" style={{color: props.color}}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="90%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
                labelStyle={{
                  display: "none",
                }}
                position={{ x: 10, y: 50 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
      
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{
              color: props.percentage > 0 ? "#00C48C" : "#FF3D57",
            }}
          >
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
}

export default BoxChart;
