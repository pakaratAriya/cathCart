import { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideContent = ({ contents }) => {
  const slideRef = useRef();

  return (
    <div className="slide-container">
      <Slide
        ref={slideRef}
        arrows={false}
        autoplay={false}
        transitionDuration={100}
      >
        {contents}
      </Slide>
    </div>
  );
};

export default SlideContent;
