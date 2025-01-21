const Card = ({ project }) => {
  return (
    <div className="portfolio-card">
      <img src={`/images/${project.image}`} alt={project.title} />
      <div>
        <p className="title">{project.title}</p>
        <p className="sub-title">{project.techStack}</p>
      </div>
      {project.github ? (
        <a className="link" target="_blank" href={project.github}>
          View on Github
        </a>
      ) : (
        <span className="link">SourceCode: NDA Protected</span>
      )}
      {project.url ? (
        <a target="_blank" href={project.url}>
          <button>View</button>
        </a>
      ) : (
        <span className="link">Link: Corporate (Private Server)</span>
      )}
    </div>
  );
};

export default Card;
