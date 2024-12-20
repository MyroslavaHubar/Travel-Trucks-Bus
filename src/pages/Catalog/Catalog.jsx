import Filter from "../../components/Filter/Filter";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import CatalogList from "../../components/CatalogList/CatalogList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllTrucks } from "../../redux/allTrucks/operations";
import css from "./Catalog.module.css";

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrucks());
  }, [dispatch]);

  return (
    <Section>
      <Container className={css.catalogContainer}>
        <Filter />
        <CatalogList />
      </Container>
    </Section>
  );
};

export default Catalog;
