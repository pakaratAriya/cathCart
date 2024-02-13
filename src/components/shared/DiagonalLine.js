import classes from "./DiagonalLine.module.css";

const DiagonalLine = ({ diagonalClasses }) => {
  return <div className={`${classes.diagonal} ${diagonalClasses}`}></div>;
};

export default DiagonalLine;
