import "./nav.scss"

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Dashboard</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" className="icon" />
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <img src="notifications.svg" alt="" className="icon" />
        <div className="user">
          <img src="noavatar.png" alt="" />
          <span>Bedeir</span>
        </div>
        <img src="settings.svg" alt="" className="icon" />
      </div>
    </nav>
  );
}

export default Nav;
