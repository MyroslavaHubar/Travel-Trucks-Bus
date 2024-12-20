const CatalogItem = ({
  name,
  price,
  rating,
  location,
  description,
  gallery,
  countReviews,
}) => {
  return (
    <li>
      <div>
        <img src={gallery?.[0]?.thumb} alt={name} width={200} height={150} />
        <h3>{name}</h3>
        <p>Price: €{price}</p>
        <p>
          Rating: {rating} ({countReviews} reviews)
        </p>
        <p>Location: {location}</p>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default CatalogItem;
