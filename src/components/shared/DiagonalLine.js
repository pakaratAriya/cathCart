import baseClasses from "./DiagonalLine.module.css";

const DiagonalLine = ({ diagonalClasses }) => {
  return <div className={`${baseClasses.diagonal} ${diagonalClasses}`}></div>;
};

const DiagonalLineTest = ({ width, height, overridieClasses, lineWidth }) => {
  const length = Math.sqrt(width * width + height * height);
  const angle = (Math.atan2(height, width) * 180) / Math.PI;
  console.log(`angle = ${angle}`);
  return (
    <div
      className={`${baseClasses.diagonal} ${overridieClasses}`}
      style={{
        width: `${length}px`,
        transform: `translateY(${
          height - lineWidth / 2
        }px) rotate(-${angle}deg)`,
      }}
    ></div>
  );
};

export default DiagonalLineTest;
