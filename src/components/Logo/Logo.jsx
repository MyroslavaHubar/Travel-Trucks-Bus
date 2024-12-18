import { Link } from "react-router-dom";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={css.logo}>
      <svg width="136" height="16">
        <use href="/src/assets/sprite.svg#logo"></use>
      </svg>
    </Link>
  );
};

export default Logo;
