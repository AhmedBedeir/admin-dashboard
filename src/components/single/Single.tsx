import { Avatar, Button } from "@mui/material";
import "./single.scss";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Single() {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <Avatar
              src="https://mui.com/static/images/avatar/2.jpg"
              className="avatar"
            />
            <h1>Ahmed Bedeir</h1>
            <Button variant="contained" color="secondary" className="btn">
              Update
            </Button>
          </div>
          <div className="detail">
            <div className="item">
              <span className="key">ID:</span>
              <span className="value">1</span>
            </div>
            <div className="item">
              <span className="key">ID:</span>
              <span className="value">1</span>
            </div>
            <div className="item">
              <span className="key">ID:</span>
              <span className="value">1</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <Legend />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="activities">
        <h2>Latest Activity </h2>
        <ul>
          <li>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, perspiciatis.
              </p>
              <time>2 hours ago</time>
            </div>
          </li>
          <li>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, perspiciatis.
              </p>
              <time>2 hours ago</time>
            </div>
          </li>
          <li>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, perspiciatis.
              </p>
              <time>2 hours ago</time>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Single;
