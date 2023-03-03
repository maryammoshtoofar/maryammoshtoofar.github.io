import Animated from "components/animate-component";

const Skill = ({ skill }) => {
  const { name, percent } = skill;
  const animateConfig = {
    initial: { width: 0 },
    whileInView: { width: `${percent}%` },
  };

  return (
    <dd key={skill.name}>
      <div className="skills-title">
        <span>{name}</span>
        <span>{percent}%</span>
      </div>
      <div className="progress-bar">
        <Animated animateConfig={animateConfig}>
          <div className="now" style={{ maxWidth: `${percent}%` }}></div>
        </Animated>
      </div>
    </dd>
  );
};

export default Skill;
