import classes from "./error.module.css";
import Card from "./Card";
const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button type="button" onClick={props.clearHandler}>
            Okay
          </button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
