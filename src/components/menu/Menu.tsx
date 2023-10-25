import "./menu.scss";
import { menu } from "../../data";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => {
        return (
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((it) => {
              return (
                <Link to={it.url} className="listItem" key={it.id}>
                  <img src={it.icon} alt="home" />
                  <span className="listItemTitle">{it.title}</span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
