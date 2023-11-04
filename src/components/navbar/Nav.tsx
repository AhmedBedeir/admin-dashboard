import "./nav.scss";

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src="/admin-dashboard/logo.svg" alt="logo" />
        <span>Dashboard</span>
      </div>
      <div className="icons">
        <img src="/admin-dashboard/search.svg" alt="" className="icon" />
        <img src="/admin-dashboard/app.svg" alt="" className="icon" />
        <img src="/admin-dashboard/expand.svg" alt="" className="icon" />
        <img src="/admin-dashboard/notifications.svg" alt="" className="icon" />
        <div className="user">
          <img src="/admin-dashboard/noavatar.png" alt="" />
          <span>Bedeir</span>
        </div>
        <img src="/admin-dashboard/settings.svg" alt="" className="icon" />
      </div>
    </nav>
  );
}

export default Nav;
