import classes from "./PlusSign.module.css";

const PlusSign = ({ plusClasses }) => {
  return (
    <div className={classes.container}>
      <div className={`${classes.plus} ${plusClasses}`} />
    </div>
  );
};

export default PlusSign;
