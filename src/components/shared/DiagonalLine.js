import baseClasses from "./DiagonalLine.module.css";

const DiagonalLine = ({ diagonalClasses }) => {
  return <div className={`${baseClasses.diagonal} ${diagonalClasses}`}></div>;
};

const DiagonalLineTest = ({ width, height, overridieClasses }) => {
  const length = Math.sqrt(width * width + height * height);
  const angle = Math.atan2(height, width);
  return (
    <div
      className={`${baseClasses.diagonal} ${overridieClasses}`}
      style={{
        width: length,
        transform: `translateY(${height}px) rotate(${angle}deg)`,
      }}
    ></div>
  );
};

export default DiagonalLine;
