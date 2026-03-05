function Projects() {
  return (
    <section id="projects" style={{ padding: "80px 40px", minHeight: "calc(100vh - 64px)", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <h2>My Projects</h2>
        <div style={{ marginBottom: "40px" }}>
          <h3>Annoying Game</h3>
          <p>This challenging platformer game tests your patience and reflexes. Your goal is to reach the top without falling victim to deadly monsters or tricky obstacles. Take it slow—rushing will only lead to frustration. Be prepared for a lengthy adventure that rewards perseverance!</p>
          <a href="/annoying_game.zip" download style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#0077B5", color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "10px" }}>Download Annoying Game</a>
        </div>
        <div style={{ marginBottom: "40px" }}>
          <h3>OCR Crossword Solver</h3>
          <p>This OCR project was developed by second-year EPITA students as a crossword solver featuring a custom neural network created by our group. Download and try it out!</p>
          <a href="/ocr_project.tar.gz" download style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#0077B5", color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "10px" }}>Download OCR Project</a>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
          <img src="/Tribz.png" alt="Tribz screenshot" style={{ width: "150px", marginRight: "20px", borderRadius: "5px" }} />
          <div>
            <h3>Tribz</h3>
            <p>Tribz is an innovative 2D real-time strategy (RTS) and management simulation game that immerses players in a vividly reimagined prehistoric world enriched with elements drawn from myth and fantasy. The game centers on the player assuming the pivotal role of a tribe leader, entrusted with the complex task of ensuring not only the survival but also the sustainable growth and territorial expansion of their nascent community. This environment is unforgiving—filled with natural hazards such as volcanic eruptions, seasonal floods, and unpredictable weather patterns, alongside a diverse menagerie of mythical creatures inspired by ancient folklore and paleontological reconstructions.</p>
            <a href="/Tribz.zip" download style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#0077B5", color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "10px" }}>Download Tribz</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;