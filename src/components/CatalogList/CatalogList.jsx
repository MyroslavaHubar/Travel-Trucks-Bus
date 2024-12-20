import { useSelector } from "react-redux";
import {
  selectAllTrucks,
  selectAllTrucksIsLoading,
} from "../../redux/allTrucks/selectors";
import Loader from "../Loader/Loader";
import CatalogItem from "../CatalogItem/CatalogItem";

const CatalogList = () => {
  const trucks = useSelector(selectAllTrucks);
  const isLoading = useSelector(selectAllTrucksIsLoading);
  console.log("Trucks:", trucks);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <ul>
        {trucks.length > 0 ? (
          trucks.map((truck) => (
            <CatalogItem
              key={truck.id}
              countReviews={truck.reviews?.length || 0}
              description={truck.description}
              gallery={truck.gallery}
              location={truck.location}
              name={truck.name}
              price={truck.price.toFixed(2)}
              rating={truck.rating}
            />
          ))
        ) : (
          <p>No trucks. Sorry!</p>
        )}
      </ul>
    </div>
  );
};

export default CatalogList;
