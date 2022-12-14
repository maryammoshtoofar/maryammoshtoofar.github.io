const Icon = ({ type }) => {
  const { component, href } = type;
  return (
    <a rel="noreferrer" target="_blank" href={href}>
      {component}
    </a>
  );
};

export default Icon;
