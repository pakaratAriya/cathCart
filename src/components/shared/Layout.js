import classes from './Layout.module.css';
import { useMediaQuery } from '@mui/material';
import SlideContent from './SlideContent';
import Content from './Content';

const Layout = ({extraClasses, title, image, contentData}) => {
    const isMobileSize = useMediaQuery("(max-width: 750px)");
  return (
    <div className={`${classes.container} ${extraClasses.container}`}>
      <div className={`${classes.header} ${extraClasses.header}`}>{title}</div>
      <div className={`${classes['image-container']} ${extraClasses['image-container']}`}>
        <div className={`${classes['image-components']} ${extraClasses['image-components']}`}>
          {image}
        </div>
      </div>
      {isMobileSize ? <SlideContent
        contents={contentData.map((data, index) => (
          <Content key={index} {...data} />
        ))}
        slideNumber={contentData.length}
      /> :
      <div className={`${classes.content} ${extraClasses.content}`}>
        {
              contentData.map((data, index) => (
                <Content key={index} {...data} index={index} />
              ))
            
        }
      </div>
    }
    </div>
  );
}

export default Layout;