import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <span>Dashboard</span>
      <span>© Bedeir Admin Dashboard {new Date().getFullYear()}</span>
    </footer>
  );
}

export default Footer;
