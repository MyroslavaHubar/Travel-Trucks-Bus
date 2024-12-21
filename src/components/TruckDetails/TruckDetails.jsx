import { useSelector } from "react-redux";
import { selectTruckById } from "../../redux/allTrucks/selectors";
import Container from "../Container/Container";
import { FaStar } from "react-icons/fa";
import clsx from "clsx";
import css from "./TruckDetails.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

const TruckDetails = () => {
  const truckById = useSelector(selectTruckById);
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <>
      <Container>
        <h3 className={css.detailsTitle}>{truckById.name}</h3>
        <div className={css.detailsRatingBlock}>
          <div className={css.detailsRating}>
            <FaStar className={css.detailsStarIcon} />
            <p className={css.detailsReviews}>
              {truckById.rating} (
              {truckById.reviews ? truckById.reviews.length : 0} Reviews)
            </p>
          </div>
          <div className={css.detailsRating}>
            <svg width="16" height="16">
              <use href="/sprite.svg#map" />
            </svg>
            <p className={css.detailsLocationTitle}>{truckById.location}</p>
          </div>
        </div>
        <div>
          <p className={css.detailsPrice}>
            &#x20AC;{truckById.price.toFixed(2)}
          </p>
        </div>
        {truckById.gallery.length > 0 ? (
          <ul className={css.detailsList}>
            {truckById.gallery.map((item, index) => (
              <li key={index} className={css.detailsItem}>
                <img
                  src={item.thumb}
                  alt={`Gallery image ${index + 1}`}
                  className={css.detailsImage}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className={css.detailsMessage}>No images. Sorry!</p>
        )}
        {/* DESCRIPTION */}
        <p className={css.detailsDescription}> {truckById.description}</p>
      </Container>
      <Container>
        <div>
          <NavLink to="features" className={buildLinkClass}>
            Features
          </NavLink>
          <NavLink to="reviews" className={buildLinkClass}>
            Reviews
          </NavLink>
        </div>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default TruckDetails;
