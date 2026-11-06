const skills = ["React", "TypeScript", "Next.js", "Java", "Node.js", "REST APIs", "PostgreSQL", "MongoDB", "Tailwind CSS", "Figma", "Git", "Docker", "Responsive design", "Product thinking"];

export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <div><div className="section-kicker">03 / my toolkit</div><h2>Good tools.<br />Better ideas.</h2></div>
        <p className="section-intro">A flexible toolkit for taking an idea from a rough sketch to something people can use.</p>
      </div>
      <div className="skills-cloud">{skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}</div>
    </section>
  );
}
