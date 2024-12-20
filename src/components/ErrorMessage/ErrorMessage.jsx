import css from "./ErrorMessage.module.css";

function ErrorMessage({ message }) {
  return (
    <div className={css.errorMessageContainer}>
      <h2 className={css.errorMessage}>{message}!</h2>
    </div>
  );
}

export default ErrorMessage;
