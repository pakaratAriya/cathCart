import { useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Pagination from "./Pagination";
import classes from "./SlideContent.module.css";

const SlideContent = ({ contents, slideNumber }) => {
  const slideRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const onClickPaginationHandler = (index) => {
    setActiveIndex(index);
    slideRef.current.goTo(index);
  };
  return (
    <div className="slide-container" style={{ position: "relative" }}>
      <Slide
        ref={slideRef}
        arrows={false}
        autoplay={false}
        transitionDuration={100}
        infinite={false}
        onChange={(from, to) => {
          setActiveIndex(to);
        }}
      >
        {contents}
      </Slide>
      <div className={classes.pagination}>
        <Pagination
          pageNumber={slideNumber}
          activeIndex={activeIndex}
          onClick={onClickPaginationHandler}
        />
      </div>
    </div>
  );
};

export default SlideContent;
