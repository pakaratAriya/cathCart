import classes from "./Pagination.module.css";
const Pagination = ({ pageNumber, onClick, activeIndex }) => {
  const onClickPageHandle = (index) => {
    onClick(index);
  };
  const dots = [];
  for (let i = 0; i < pageNumber; i++) {
    dots.push(
      <div
        className={`${classes.dot} ${
          activeIndex === i ? classes.active : undefined
        }`}
        onClick={() => {
          onClickPageHandle(i);
        }}
      ></div>
    );
  }
  return <div className={classes.pagination}>{dots}</div>;
};

export default Pagination;
