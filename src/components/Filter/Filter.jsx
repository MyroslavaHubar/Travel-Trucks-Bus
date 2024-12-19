import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LocationSchema = Yup.object().shape({
  location: Yup.string().min(3, "Location must be at least 3 characters"),
});

const Filter = () => {
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
    console.log(values);
    toast.success("Very cool! Successful!");
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={LocationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            {/* LOCATION */}
            <div>
              <label htmlFor="location">Location</label>
              <Field
                id="location"
                name="location"
                type="text"
                placeholder="City"
              />
              <svg width="20" height="20">
                <use href="/sprite.svg#map" />
              </svg>
            </div>
            {errors.location && touched.location ? (
              <div>{errors.location}</div>
            ) : null}
            {/* FILTERS */}
            <h2>Filters</h2>
            {/* VEHICLE EQUIPMENT */}
            <h3>Vehicle equipment</h3>
            <div>
              <label>
                <Field id="ac" name="ac" type="checkbox" />
                <svg width="32" height="32">
                  <use href="/sprite.svg#wind" />
                </svg>
                <span>AC</span>
              </label>
              <label>
                <Field id="automatic" name="automatic" type="checkbox" />
                <svg width="32" height="32">
                  <use href="/sprite.svg#diagram" />
                </svg>
                <span>Automatic</span>
              </label>
              <label>
                <Field id="kitchen" name="kitchen" type="checkbox" />
                <svg width="32" height="32">
                  <use href="/sprite.svg#cup" />
                </svg>
                <span>Kitchen</span>
              </label>
              <label>
                <Field id="tv" name="tv" type="checkbox" />
                <svg width="32" height="32">
                  <use href="/sprite.svg#tv" />
                </svg>
                <span>TV</span>
              </label>
              <label>
                <Field id="bathroom" name="tv" type="bathroom" />
                <svg width="32" height="32">
                  <use href="/sprite.svg#shower" />
                </svg>
                <span>Bathroom</span>
              </label>
            </div>
            {/* VEHICLE TYPE */}
            <h3>Vehicle type</h3>
            <div>
              <label>
                <Field id="van" name="van" type="checkbox" />
                <svg width="32" height="32">
                  <use href="/sprite.svg#grid" />
                </svg>
                <span>Van</span>
              </label>
              <label>
                <Field id="integrated" name="integrated" type="checkbox" />
                <svg width="32" height="32">
                  <use href="/sprite.svg#grid-2" />
                </svg>
                <span>Fully Integrated</span>
              </label>
              <label>
                <Field id="alcove" name="alcove" type="checkbox" />
                <svg width="32" height="32">
                  <use href="/sprite.svg#grid-3" />
                </svg>
                <span>Alcove</span>
              </label>
            </div>
            {/* BUTTON SEARCH */}
            <button type="submit">Search</button>
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
    </>
  );
};

export default Filter;
