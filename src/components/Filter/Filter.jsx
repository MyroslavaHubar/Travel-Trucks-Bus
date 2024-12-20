import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterTrucks/slice";

const LocationSchema = Yup.object().shape({
  location: Yup.string().matches(
    /^[A-Za-z\s]+$/,
    "Location can only contain latin letters and spaces"
  ),
});

const Filter = () => {
  const dispatch = useDispatch();

  const initialValues = {
    location: "",
    AC: false,
    transmission: "",
    kitchen: false,
    TV: false,
    bathroom: false,
    form: "",
  };
  const handleSubmit = (values) => {
    // console.log(values);
    dispatch(changeFilter(values));
    toast.success("Very cool! Successful!");
  };

  return (
    <div className={css.filterForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={LocationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            {/* LOCATION */}
            <div className={css.filterLocation}>
              <label htmlFor="location" className={css.locationTitle}>
                Location
              </label>
              <div className={css.locationInputWrapper}>
                <svg width="20" height="20" className={css.filterIcon}>
                  <use href="/sprite.svg#map" />
                </svg>
                <Field
                  id="location"
                  name="location"
                  type="text"
                  placeholder="City"
                  className={css.locationInput}
                />
              </div>
              {errors.location && touched.location ? (
                <div className={css.errorsMessage}>{errors.location}</div>
              ) : null}
            </div>

            {/* FILTERS */}
            <h2 className={css.filterTitle}>Filters</h2>
            {/* VEHICLE EQUIPMENT */}
            <h3 className={css.groupTitle}>Vehicle equipment</h3>
            <div className={`${css.filterGroup} ${css.filterGroupEquipment}`}>
              <label className={css.filterGroupLabel}>
                <Field id="ac" name="ac" type="checkbox" />
                <span>
                  <svg width="32" height="32">
                    <use href="/sprite.svg#wind" />
                  </svg>
                  AC
                </span>
              </label>
              <label className={css.filterGroupLabel}>
                <Field id="automatic" name="automatic" type="checkbox" />
                <span>
                  <svg width="32" height="32">
                    <use href="/sprite.svg#diagram" />
                  </svg>
                  Automatic
                </span>
              </label>
              <label className={css.filterGroupLabel}>
                <Field id="kitchen" name="kitchen" type="checkbox" />
                <span>
                  <svg width="32" height="32">
                    <use href="/sprite.svg#cup" />
                  </svg>
                  Kitchen
                </span>
              </label>
              <label className={css.filterGroupLabel}>
                <Field id="tv" name="tv" type="checkbox" />
                <span>
                  <svg width="32" height="32">
                    <use href="/sprite.svg#tv" />
                  </svg>
                  TV
                </span>
              </label>
              <label className={css.filterGroupLabel}>
                <Field id="bathroom" name="bathroom" type="checkbox" />
                <span>
                  <svg width="32" height="32">
                    <use href="/sprite.svg#shower" />
                  </svg>
                  Bathroom
                </span>
              </label>
            </div>
            {/* VEHICLE TYPE */}
            <h3 className={css.groupTitle}>Vehicle type</h3>
            <div className={css.filterGroup}>
              <label className={css.filterGroupLabel}>
                <Field id="van" name="van" type="checkbox" />
                <span>
                  <svg width="32" height="32">
                    <use href="/sprite.svg#grid" />
                  </svg>
                  Van
                </span>
              </label>
              <label className={css.filterGroupLabel}>
                <Field id="integrated" name="integrated" type="checkbox" />
                <span>
                  <svg width="32" height="32">
                    <use href="/sprite.svg#grid-2" />
                  </svg>
                  Fully Integrated
                </span>
              </label>
              <label className={css.filterGroupLabel}>
                <Field id="alcove" name="alcove" type="checkbox" />
                <span>
                  <svg width="32" height="32">
                    <use href="/sprite.svg#grid-3" />
                  </svg>
                  Alcove
                </span>
              </label>
            </div>
            {/* BUTTON SEARCH */}
            <button type="submit" className={css.filterButton}>
              Search
            </button>
          </Form>
        )}
      </Formik>

      {/* TOAST CONTAINER */}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Filter;
