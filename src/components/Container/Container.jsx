import css from "./Container.module.css";
const Container = ({ children, className }) => {
  const containerClass = `${css.container} ${className || ""}`;

  return <div className={containerClass}>{children}</div>;
};

export default Container;
