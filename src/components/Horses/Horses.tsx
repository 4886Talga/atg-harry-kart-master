import React from "react";
import styles from "./Horses.module.scss";
import { v4 as uuidv4 } from "uuid";
import { Horse } from "../Horses/Horse";

interface HorsesProps {
  starts: [];
}

export const Horses: React.FC<HorsesProps> = ({ starts }) => {
  return (
    <div className={styles["horses-holder"]}>
      <div data-testid="horses" className={styles.horses}>
        {starts &&
          starts.map((start) => <Horse key={uuidv4()} start={start} />)}
      </div>
    </div>
  );
};
