import Content from "../shared/Content";
import DiagonalLine from "../shared/DiagonalLine";
import classes from "./page.module.css";
import playerClasses1 from "./player1.module.css";
import playerClasses2 from "./player2.module.css";
import playerClasses3 from "./player3.module.css";
import imgDecClasses from "./imageDecorations.module.css";
import PlusSign from "../shared/PlusSign";
import { useMediaQuery } from "@mui/material";

const athletData = [
  {
    id: "player-1",
    contentClasses: playerClasses1,
    no: "01",
    title: "CONNECTION",
    description:
      "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
  },
  {
    id: "player-2",
    contentClasses: playerClasses2,
    no: "02",
    title: "COLLABORATION",
    description:
      "Work with recruiter to increase your chances of finding talented athlete.",
  },
  {
    id: "player-3",
    contentClasses: playerClasses3,
    no: "03",
    title: "GROWTH",
    description: "Save your time, recruit proper athlets for your team.",
  },
];

const PlayerPage = () => {
    const isMobileSize = useMediaQuery('(max-width: 750px)')
  return (
    <div className={classes.container}>
        <div className={classes.header}>PLAYER</div>
      <div className={classes["image-container"]}>
        <div className={classes["image-components"]}>
          <img
            className={classes.img}
            src="/images/basketball.png"
            alt="footballer image"
          />
          <DiagonalLine diagonalClasses={imgDecClasses.diagonal1} />
          <DiagonalLine diagonalClasses={imgDecClasses.diagonal2} />
          <div className={classes.plus1}>
            <PlusSign/>
          </div>
          <div className={classes.plus2}>
            <PlusSign plusClasses={imgDecClasses.plusTransparent}/>
          </div>
          <div className={classes.plus3}>
            <PlusSign/>
          </div>
          
        </div>
      </div>
      {!isMobileSize && <div className={classes.content}>
        {athletData.map((data) => (
          <Content key={data.id} {...data} />
        ))}
      </div>}
      
    </div>
  );
};
export default PlayerPage;
