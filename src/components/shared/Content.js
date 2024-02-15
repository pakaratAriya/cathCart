import classes from "./Content.module.css";

const Content = ({ id, contentClasses, no, title, description, index }) => {
  return (
    <div
      className={`${classes.text} ${contentClasses.text} ${
        contentClasses[`text-${index}`]
      }`}
      id={id}
    >
      <div className={classes["text-container"]}>
        <div className={classes["title-area"]}>
          <div className={classes.number}>
            <div
              className={`${classes["text-number"]} ${
                contentClasses["text-number"]
              } ${contentClasses[`text-number-${index}`]}`}
            >
              {no}
            </div>
            <div
              className={`${classes.underline} ${
                contentClasses[`underline-${index}`]
              }`}
            ></div>
          </div>
        </div>
        <div className={classes.title}>{title}</div>
      </div>
      <p
        className={`${classes.description} ${contentClasses.description} ${
          contentClasses[`description-${index}`]
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default Content;
