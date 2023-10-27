import "./home.scss";
import TopBox from "../../components/topBox/TopBox";
import BoxChart from "../../components/boxChart/BoxChart";
import {
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <BoxChart {...chartBoxUser} />
      </div>
      <div className="box box3">
        <BoxChart {...chartBoxProduct} />
      </div>
      <div className="box box4">box4</div>
      <div className="box box5">
        <BoxChart {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <BoxChart {...chartBoxConversion} />
      </div>
      <div className="box box7">box7</div>
      <div className="box box8">box8</div>
      <div className="box box9">box9</div>
    </div>
  );
}

export default Home;
