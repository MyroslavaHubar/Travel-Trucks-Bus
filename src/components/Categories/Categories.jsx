import css from "./Categories.module.css";
import { IoWaterOutline } from "react-icons/io5";
import { TbMicrowave } from "react-icons/tb";
import { MdOutlineGasMeter } from "react-icons/md";

const Categories = ({ truck }) => {
  const categories = [
    {
      key: "transmission",
      label: "Automatic",
      svg: "diagram",
      value: "automatic",
    },
    { key: "AC", label: "AC", svg: "wind" },
    { key: "engine", label: "Hybrid", svg: "fuel", value: "hybrid" },
    { key: "engine", label: "Diesel", svg: "fuel", value: "diesel" },
    { key: "engine", label: "Petrol", svg: "fuel", value: "petrol" },
    { key: "kitchen", label: "Kitchen", svg: "cup" },
    { key: "radio", label: "Radio", svg: "radio" },
    { key: "bathroom", label: "Bathroom", svg: "shower" },
    { key: "refrigerator", label: "Frige", svg: "fridge" },
    {
      key: "microwave",
      label: "Microwave",
      svg: "microwave",
      icon: TbMicrowave,
    },
    { key: "gas", label: "Gas", svg: "gas", icon: MdOutlineGasMeter },
    { key: "water", label: "Water", svg: "water", icon: IoWaterOutline },
    { key: "TV", label: "TV", svg: "tv" },
  ];

  return (
    <ul className={css.categoryList}>
      {categories.map((category) => {
        const isFeatureAvailable =
          truck[category.key] === true ||
          truck[category.key] === category.value;
        return isFeatureAvailable ? (
          <div key={category.key} className={css.categoryContent}>
            {category.icon ? (
              <category.icon className={css.categoryIcon} />
            ) : (
              <svg width="20" height="20" className={css.categoryIcon}>
                <use href={`/sprite.svg#${category.svg}`} />
              </svg>
            )}
            <span className={css.categoryTitle}>{category.label}</span>
          </div>
        ) : null;
      })}
    </ul>
  );
};

export default Categories;
