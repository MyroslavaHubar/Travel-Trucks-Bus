import { NavLink } from "react-router-dom";
import Categories from "../Categories/Categories";
import css from "./CatalogItem.module.css";

const CatalogItem = ({ truck }) => {
  return (
    <li className={css.catalogItem}>
      {/* PHOTO */}
      <div className={css.imageContainer}>
        <img
          src={truck.gallery[0].thumb}
          alt={truck.name}
          // width={292}
          // height={320}
          className={css.catalogImage}
        />
      </div>
      {/* CONTENT */}
      <div className={css.contentContainer}>
        {/* TITLE AND PRICE */}
        <div className={css.catalogTitlePrice}>
          <h3 className={css.catalogTitle}>{truck.name}</h3>
          <div className={css.priceAndFavorite}>
            <p className={css.catalogPrice}>&#x20AC;{truck.price.toFixed(2)}</p>
            <svg width="26" height="24">
              <use href="/sprite.svg#property" />
            </svg>
          </div>
        </div>
        {/* RATING AND LOCATION */}
        <div className={css.catalogRatingBlock}>
          <div className={css.catalogRating}>
            <svg width="16" height="16" className={css.catalogIconRating}>
              <use href="/sprite.svg#rating" />
            </svg>
            <p className={css.catalogReviews}>
              {truck.rating} ({truck.reviews ? truck.reviews.length : 0}{" "}
              Reviews)
            </p>
          </div>
          <div className={css.catalogRating}>
            <svg width="16" height="16">
              <use href="/sprite.svg#map" />
            </svg>
            <p className={css.catalogLocationTitle}>{truck.location}</p>
          </div>
        </div>
        {/* DESCRIPTION */}
        <p className={css.catalogDescription}>{truck.description}</p>
        {/* CATEGORIES */}
        <Categories truck={truck} />
        {/* ITEM BUTTON */}
        <NavLink to={`/catalog/${truck.id}`} className={css.catalogItemsButton}>
          Show more
        </NavLink>
      </div>
    </li>
  );
};

export default CatalogItem;
