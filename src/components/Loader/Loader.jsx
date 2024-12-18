import { ThreeCircles } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#d84343"
        ariaLabel="three-circles-loading"
      />
    </div>
  );
};

export default Loader;
