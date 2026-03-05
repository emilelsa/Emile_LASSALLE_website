function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Emile Lassalle</h1>

      <ul style={styles.menu}>
        <li><a href="#about" className="btn-blue nav-btn">About</a></li>
        <li><a href="#projects" className="btn-blue nav-btn">Projects</a></li>
        <li><a href="#resume" className="btn-blue nav-btn">Resume</a></li>
        <li><a href="#contact" className="btn-blue nav-btn">Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
    padding: "0 40px",
    backgroundColor: "#111",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxSizing: "border-box",
  },
  logo: {
    fontSize: "1.1rem",
    margin: 0,
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "16px",
    margin: 0,
    padding: 0,
  },
};

export default Navbar;