import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <Section className={css.homeSection}>
      <Container>
        <div className={css.homeContent}>
          <div className={css.homeContext}>
            <h1 className={css.homeTitle}>Campers of your dreams</h1>
            <p className={css.homeDescription}>
              You can find everything you want in our catalog
            </p>
          </div>
          <NavLink to="/catalog" className={css.homeButton}>
            View Now
          </NavLink>
        </div>
      </Container>
    </Section>
  );
};

export default HomePage;
