import Filter from "../../components/Filter/Filter";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import CatalogList from "../../components/CatalogList/CatalogList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllTrucks } from "../../redux/allTrucks/operations";

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Fetching all trucks...");
    dispatch(fetchAllTrucks());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Filter />
        <CatalogList />
      </Container>
    </Section>
  );
};

export default Catalog;
