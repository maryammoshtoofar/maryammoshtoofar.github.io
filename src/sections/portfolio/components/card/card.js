const Card = ({ project }) => {
  return (
    <div className="portfolio-card">
      <img src={`/images/${project.image}`} alt={project.title} />
      <div>
        <p className="title">{project.title}</p>
        <p className="sub-title">{project.techStack}</p>
      </div>
      <a className="link" target="_blank" href={project.github}>
        View on Github
      </a>
      <a target="_blank" href={project.url}>
        <button>View</button>
      </a>
    </div>
  );
};

export default Card;
