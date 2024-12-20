import Filter from "../../components/Filter/Filter";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import CatalogList from "../../components/CatalogList/CatalogList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllTrucks } from "../../redux/allTrucks/operations";
import css from "./Catalog.module.css";
import { selectFilterTrucks } from "../../redux/filterTrucks/selectors";

const Catalog = () => {
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(4);
  const filterTrucks = useSelector(selectFilterTrucks);

  useEffect(() => {
    dispatch(fetchAllTrucks());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(4);
  }, [filterTrucks]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <Section>
      <Container className={css.catalogContainer}>
        <Filter />
        <CatalogList trucks={filterTrucks.slice(0, visibleCount)} />
      </Container>
      <Container>
        {visibleCount < filterTrucks.length && (
          <button
            className={css.catalogButton}
            type="button"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        )}
      </Container>
    </Section>
  );
};

export default Catalog;
