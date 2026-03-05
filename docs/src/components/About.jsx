function About() {
  return (
    <section id="about" style={{ padding: "40px 40px", marginTop: "-350px"}}>
      <h2>About Me</h2>
      <p>
        Hi, I'm Emile Lassalle, a student at EPITA, a computer science engineering school in Paris. I'm passionate about fixing bikes, creating video games using Python with Pygame or C#, boxing, and European football. As a French-American bilingual, I'm aspiring to become a web or video game developer. I've gained experience working in a restaurant, repairing bikes, and competing in boxing. Check out my portfolio and resume for more details.
      </p>
      <a href="/portfolio.pdf" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#0077B5", color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "20px" }}>View My Portfolio</a>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#28A745", color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "20px", marginLeft: "10px" }}>View My Resume</a>
    </section>
  );
}

export default About;