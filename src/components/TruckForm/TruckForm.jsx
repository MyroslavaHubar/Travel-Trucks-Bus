import { Container } from "@mui/material";
import css from "./TruckForm.module.css";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

const TruckFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  comment: Yup.string(),
  date: Yup.date().required("Date is required"),
});

const TruckForm = () => {
  return (
    <>
      <Container className={css.formContainer}>
        <div className={css.formBox}>
          <div>
            <h4 className={css.formTitle}>Book your campervan now</h4>
            <p className={css.formContext}>
              Stay connected! We are always ready to help you.
            </p>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              date: "",
              comment: "",
            }}
            validationSchema={TruckFormSchema}
            onSubmit={(values, { resetForm }) => {
              toast.success("Very cool! Successful!");
              resetForm();
            }}
          >
            {({ errors, values, touched, setFieldValue }) => (
              <Form>
                <div className={css.truckForma}>
                  <label htmlFor="name"></label>
                  <Field
                    className={css.truckFormInput}
                    name="name"
                    type="text"
                    placeholder="Name*"
                  />
                  {touched.name && errors.name ? (
                    <div className={css.errorMessage}>{errors.name}</div>
                  ) : null}
                  <label htmlFor="email"></label>
                  <Field
                    className={css.truckFormInput}
                    name="email"
                    type="email"
                    placeholder="Email*"
                  />
                  {touched.email && errors.email ? (
                    <div className={css.errorMessage}>{errors.email}</div>
                  ) : null}
                  <label htmlFor="date"></label>
                  <DatePicker
                    selected={values.date}
                    onChange={(date) => setFieldValue("date", date)}
                    className={css.truckFormInput}
                    placeholderText="Booking date*"
                  />
                  {touched.date && errors.date ? (
                    <div className={css.errorMessage}>{errors.date}</div>
                  ) : null}
                  <label htmlFor="comment"></label>
                  <Field
                    className={css.truckFormComment}
                    name="comment"
                    as="textarea"
                    placeholder="Comment"
                  />
                </div>
                <div className={css.buttonContainer}>
                  <button className={css.formButton} type="submit">
                    Send
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </>
  );
};

export default TruckForm;
