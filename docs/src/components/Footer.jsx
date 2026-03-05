function Footer() {
  return (
    <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px", backgroundColor: "#111", color: "white", boxSizing: "border-box" }}>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <a href="https://www.instagram.com/emile.lsa/" target="_blank" rel="noopener noreferrer" style={{ color: "#E4405F" }}>My Instagram</a>
        <a href="http://linkedin.com/in/emile-lassalle-270b123b2" target="_blank" rel="noopener noreferrer" style={{ color: "#0077B5" }}>My LinkedIn</a>
        <a href="https://github.com/Peanut3310" target="_blank" rel="noopener noreferrer" style={{ color: "#333" }}>My GitHub</a>
      </div>
      <p style={{ margin: 0 }}>&copy; 2026 Emile Lassalle. All rights reserved.</p>
    </footer>
  );
}

export default Footer;