import Categories from "../Categories/Categories";

const CatalogItem = ({ truck }) => {
  return (
    <li>
      {/* PHOTO AND PRICE */}
      <div>
        <img src={truck.gallery[0].thumb} alt={truck.name} width={292} />
        <div>
          <h3>{truck.name}</h3>
          <div>
            <p>Price: &#x20AC;{truck.price}</p>
            <svg width="26" height="24">
              <use href="/sprite.svg#property" />
            </svg>
          </div>
        </div>
        {/* RATING AND LOCATION */}
        <div>
          <svg width="26" height="24">
            <use href="/sprite.svg#rating" />
          </svg>

          <p>
            {truck.rating} ({truck.countReviews} Reviews)
          </p>
          <svg width="26" height="24">
            <use href="/sprite.svg#map" />
          </svg>
          <p>{truck.location}</p>
        </div>
        {/* DESCRIPTION */}
        <p>{truck.description}</p>
        {/* CATEGORIES */}
        <Categories truck={truck} />
      </div>
    </li>
  );
};

export default CatalogItem;
