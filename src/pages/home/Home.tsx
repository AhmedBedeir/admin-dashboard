import "./home.scss";
import TopBox from "../../components/topBox/TopBox";
import BoxChart from "../../components/boxChart/BoxChart";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import BarChartBox from "../../components/barChart/BarChartBox";
import PieChartBox from "../../components/pieChart/PieChartBox";
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
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <BoxChart {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <BoxChart {...chartBoxConversion} />
      </div>
      <div className="box box7">box7</div>
      <div className="box box8">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxVisit} />
      </div>
    </div>
  );
}

export default Home;
