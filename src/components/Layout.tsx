import Nav from "./navbar/Nav";
import Menu from "./menu/Menu";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="main">
      <Nav />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
