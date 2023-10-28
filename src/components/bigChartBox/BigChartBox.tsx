import "./bigChartBox.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sat",
    electronics: 4000,
    books: 2400,
    cloths: 2400,
  },
  {
    name: "Sun",
    electronics: 3000,
    books: 1398,
    cloths: 2210,
  },
  {
    name: "Mon",
    electronics: 2000,
    books: 9800,
    cloths: 2290,
  },
  {
    name: "Tue",
    electronics: 2780,
    books: 3908,
    cloths: 2000,
  },
  {
    name: "Wed",
    electronics: 1890,
    books: 4800,
    cloths: 2181,
  },
  {
    name: "Thu",
    electronics: 2390,
    books: 3800,
    cloths: 2500,
  },
  {
    name: "Fri",
    electronics: 3490,
    books: 4300,
    cloths: 2100,
  },
];

function BigChartBox() {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="electronics"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="cloths"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BigChartBox;
