import classes from "./Layout.module.css";
import { useMediaQuery } from "@mui/material";
import SlideContent from "./SlideContent";
import Content from "./Content";

const Layout = ({ containerClasses, title, image, contentData }) => {
  const isMobileSize = useMediaQuery("(max-width: 750px)");
  return (
    <div className={`${classes.container} ${containerClasses.container}`}>
      <div className={`${classes.header} ${containerClasses.header}`}>
        {title}
      </div>
      <div
        className={`${classes["image-container"]} ${containerClasses["image-container"]}`}
      >
        <div
          className={`${classes["image-components"]} ${containerClasses["image-components"]}`}
        >
          {image}
        </div>
      </div>
      {isMobileSize ? (
        <SlideContent
          contents={contentData.map((data, index) => (
            <Content key={index} {...data} />
          ))}
          slideNumber={contentData.length}
        />
      ) : (
        <div className={`${classes.content} ${containerClasses.content}`}>
          {contentData.map((data, index) => (
            <Content key={index} {...data} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Layout;
