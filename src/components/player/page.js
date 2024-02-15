import DiagonalLine from "../shared/DiagonalLine";
import classes from "./page.module.css";
import contentClasses from "./contentClasses.module.css";
import imgDecClasses from "./imageDecorations.module.css";
import PlusSign from "../shared/PlusSign";
import Layout from "../shared/Layout";

const playerData = [
  {
    id: "player-1",
    contentClasses: contentClasses,
    no: "01",
    title: "CONNECTION",
    description:
      "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
  },
  {
    id: "player-2",
    contentClasses: contentClasses,
    no: "02",
    title: "COLLABORATION",
    description:
      "Work with recruiter to increase your chances of finding talented athlete.",
  },
  {
    id: "player-3",
    contentClasses: contentClasses,
    no: "03",
    title: "GROWTH",
    description: "Save your time, recruit proper athlets for your team.",
  },
];

const PlayerPage = () => {
  const image = (
    <>
      <img
        className={classes.img}
        src="/images/basketball.png"
        alt="basketball"
      />
      <DiagonalLine
        overridieClasses={imgDecClasses.diagonal1}
        width={262.52}
        height={304.12}
        lineWidth={6}
      />
      <DiagonalLine
        overridieClasses={imgDecClasses.diagonal2}
        width={265.63}
        height={311.16}
        lineWidth={6}
      />
      <div className={imgDecClasses.plus1}>
        <PlusSign />
      </div>
      <div className={imgDecClasses.plus2}>
        <PlusSign />
      </div>
      <div className={imgDecClasses.plus3}>
        <PlusSign />
      </div>
    </>
  );
  return (
    <Layout
      containerClasses={classes}
      title="PLAYERS"
      image={image}
      contentData={playerData}
    />
  );
};

export default PlayerPage;
