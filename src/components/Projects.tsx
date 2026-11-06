const projects = [
  { number: "01", name: "Kosova Geo", type: "geo", description: "An interactive cadastral geoportal for exploring parcel boundaries, numbers, satellite imagery, and the stories held in a landscape.", tags: ["GIS", "Maps", "Web app"] },
  { number: "02", name: "Harë Residence", type: "residence", description: "A premium apartment experience that makes architectural renders, building navigation, and apartment selection feel effortless.", tags: ["Real estate", "Interactive", "UX"] },
  { number: "03", name: "8A8 Gaming", type: "gaming", description: "A live gaming café presence built around energy, hardware, zones, pricing, and a reason to show up and play.", tags: ["Live site", "Brand", "Web design"], link: "https://8a8gaming.com/" },
];

export function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <div><div className="section-kicker">02 / selected work</div><h2>Things<br />I&apos;ve made.</h2></div>
        <p className="section-intro">A few real-world projects, each with its own personality and a different problem to solve.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project" key={project.name}>
            <div className={`project-art ${project.type}`}>
              <span className="art-label">case study / {project.number}</span>
              <div className="art-title">{project.name}</div>
            </div>
            <div className="project-info">
              <div className="project-number">{project.number} — {project.type}</div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-meta">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">Visit live site ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
