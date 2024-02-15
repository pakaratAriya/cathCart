import baseClasses from "./DiagonalLine.module.css";
import { useMediaQuery } from "@mui/material";

const DiagonalLine = ({ overrideClasses, desktopSize, tabletSize, mobileSize }) => {
  const isTablet = useMediaQuery('(max-width: 1500px)');
  const isMobile = useMediaQuery('(max-width: 750px)');
  let width = 0;
  let height = 0;
  let lineWidth = 0;
  if(desktopSize) {
    width = desktopSize.w;
    height = desktopSize.h;
    lineWidth = desktopSize.l;
  }
  if(isTablet && tabletSize) {
    width = tabletSize.w;
    height = tabletSize.h;
    lineWidth = tabletSize.l;
  }
  if(isMobile && mobileSize) {
    width = mobileSize.w;
    height = mobileSize.h;
    lineWidth = mobileSize.l;
  }
  const length = Math.sqrt(width * width + height * height);
  const angle = (Math.atan2(height, width) * 180) / Math.PI;
  return (
    <div
      className={`${baseClasses.diagonal} ${overrideClasses}`}
      style={{
        width: `${length}px`,
        transform: `translateY(${
          height - lineWidth / 2
        }px) rotate(-${angle}deg)`,
      }}
    ></div>
  );
};

export default DiagonalLine;
