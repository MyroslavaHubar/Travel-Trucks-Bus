import { Box } from "@mui/material";
import css from "./Features.module.css";
import { useSelector } from "react-redux";
import { selectTruckById } from "../../redux/allTrucks/selectors";
import Categories from "../Categories/Categories";

const Features = () => {
  const truckById = useSelector(selectTruckById);
  return (
    <>
      <Box
        className={css.featuresContainer}
        sx={{
          padding: "44px 52px",
          flexGrow: 1,
        }}
      >
        <div className={css.featuresBox}>
          <Categories truck={truckById} />
          <div className={css.featuresContext}>
            <h4 className={css.featuresTitle}>Vehicle details</h4>
            <div className={css.featuresDetails}>
              <div className={css.featuresDetailsContext}>
                <p>Form </p>
                <p>{truckById.form}</p>
              </div>
              <div className={css.featuresDetailsContext}>
                <p>Length</p>
                <p>{truckById.length}</p>
              </div>
              <div className={css.featuresDetailsContext}>
                <p>Width</p>
                <p>{truckById.width}</p>
              </div>
              <div className={css.featuresDetailsContext}>
                <p>Height</p>
                <p>{truckById.height}</p>
              </div>
              <div className={css.featuresDetailsContext}>
                <p>Tank</p>
                <p>{truckById.tank}</p>
              </div>
              <div className={css.featuresDetailsContext}>
                <p>Consumption</p>
                <p> {truckById.consumption}</p>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Features;
