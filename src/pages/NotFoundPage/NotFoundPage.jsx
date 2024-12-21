import { Link } from "react-router-dom";
import Section from "../../components/Section/Section";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <Section>
      <Link to="/" className={css.buttonNotPage}>
        Please, back to Home Page
      </Link>
    </Section>
  );
};

export default NotFoundPage;
