import classes from "./page.module.css";
import DiagonalLine from "../shared/DiagonalLine";
import imgDecClasses from "./imageDecorations.module.css";
import PlusSign from "../shared/PlusSign";
import contentClasses from "./contentClasses.module.css";
import Layout from "../shared/Layout";

const athletData = [
  {
    id: "athlet-1",
    contentClasses: contentClasses,
    no: "01",
    title: "CONNECTION",
    description:
      "Connect with coaches directly, you can ping coaches to view profile.",
  },
  {
    id: "athlet-2",
    contentClasses: contentClasses,
    no: "02",
    title: "COLLABORATION",
    description:
      "Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
  },
  {
    id: "athlet-3",
    contentClasses: contentClasses,
    no: "03",
    title: "GROWTH",
    description:
      "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc ",
  },
];

const AthletPage = () => {
  const image = (
    <>
      <img
        className={classes.img}
        src="/images/footballer.png"
        alt="footballer"
      />
      <DiagonalLine overrideClasses={imgDecClasses.diagonal1} desktopSize={{w: 217.7, h: 233.72, l:5}} tabletSize={{w: 217.7, h: 233.72, l:5}} mobileSize={{w: 178.89, h: 197.23, l: 3}}/>
      <div className={imgDecClasses.plus1}>
        <PlusSign />
      </div>
      <div className={imgDecClasses.plus2}>
        <PlusSign />
      </div>
    </>
  );

  return (
    <Layout
      containerClasses={classes}
      title="ATHLETES"
      image={image}
      contentData={athletData}
    />
  );
};
export default AthletPage;
