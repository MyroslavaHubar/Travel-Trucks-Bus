import { NavLink } from "react-router-dom";
import Categories from "../Categories/Categories";
import css from "./CatalogItem.module.css";

const CatalogItem = ({ truck }) => {
  return (
    <li className={css.catalogItems}>
      {/* PHOTO AND PRICE */}
      <div className={css.catalogPhotoBlock}>
        <img
          src={truck.gallery[0].thumb}
          alt={truck.name}
          width={292}
          className={css.catalogImage}
        />
        <div>
          <h3 className={css.catalogTitle}>{truck.name}</h3>
          <div>
            <p className={css.catalogPrice}>Price: &#x20AC;{truck.price}</p>
            <svg width="26" height="24">
              <use href="/sprite.svg#property" />
            </svg>
          </div>
        </div>
        {/* RATING AND LOCATION */}
        <div className={css.catalogRatingBlock}>
          <svg width="26" height="24" className={css.catalogIconRating}>
            <use href="/sprite.svg#rating" />
          </svg>

          <p className={css.catalogReviews}>
            {truck.rating} ({truck.countReviews} Reviews)
          </p>
          <svg width="26" height="24">
            <use href="/sprite.svg#map" />
          </svg>
          <p className={css.catalogLocation}>{truck.location}</p>
        </div>
        {/* DESCRIPTION */}
        <p className={css.catalogDescription}>{truck.description}</p>
        {/* CATEGORIES */}
        <Categories truck={truck} />
        <NavLink to={`/catalog/${truck.id}`} className={css.catalogItemsButton}>
          Show more
        </NavLink>
      </div>
    </li>
  );
};

export default CatalogItem;
