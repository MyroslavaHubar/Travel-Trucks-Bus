import { useSelector } from "react-redux";
import { selectAllTrucksIsLoading } from "../../redux/allTrucks/selectors";
import Loader from "../Loader/Loader";
import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./CatalogList.module.css";

const CatalogList = ({ trucks }) => {
  const isLoading = useSelector(selectAllTrucksIsLoading);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={css.catalogListContainer}>
      <ul className={css.catalogList}>
        {trucks.length > 0 ? (
          trucks.map((truck) => <CatalogItem key={truck.id} truck={truck} />)
        ) : (
          <p className={css.catalogMessage}>No trucks. Sorry!</p>
        )}
      </ul>
    </div>
  );
};

export default CatalogList;
