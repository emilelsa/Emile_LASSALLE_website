function Hero() {
  return (
        <section
          id="home"
          style={{ display: "flex", alignItems: "flex-start", padding: "40px", minHeight: "80vh" }}
        >      
      {/* Text side */}
      <div style={{ flex: 1, maxWidth: "720px" }}>
        <h1>Emile Lassalle</h1>
        <h2>Student at EPITA: computer science engineering school</h2>
        <p>
          This modern web application was made using React and JavaScript. I have made this website to introduce myself to those who do not know me. Please Enjoy !
        </p>
      </div>

      {/* Image side removed — photo is now fixed in top-right */}

    </section>
  );
}

export default Hero;