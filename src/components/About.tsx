export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <div><div className="section-kicker">01 / the person</div><h2>A little<br />context.</h2></div>
        <p className="section-intro">A full-stack developer who cares about the last 10%: the feeling, the rhythm, and the details people remember.</p>
      </div>
      <div className="about-grid">
        <figure className="portrait">
          <img src="/dioni.jpeg" alt="Dion Bajrami" />
          <figcaption>Dion Bajrami — building from Kosovo</figcaption>
        </figure>
        <div>
          <p className="about-copy">I turn complex problems into clear, useful, and memorable experiences. From maps to homes to gaming spaces, every project starts with a human question.</p>
          <div className="about-details">
            <div><strong>Based in</strong><br />Prishtina, Kosovo</div>
            <div><strong>Focus</strong><br />Product & full-stack web</div>
            <div><strong>Experience</strong><br />3+ years shipping</div>
            <div><strong>Currently</strong><br />Open to new opportunities</div>
          </div>
        </div>
      </div>
    </section>
  );
}
