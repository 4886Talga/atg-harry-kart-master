import React, { useEffect } from "react";
import styles from "./Races.module.scss";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchRaces } from "../../reducers/getRacesSlice";
import { Horses } from "../Horses/Horses";

interface RacesProps {
  resultId: string;
}

const getStartTime = (startDate: string): string => {
  const myDate = new Date(startDate);
  const minutes = myDate.getMinutes();
  const hours = myDate.getHours();
  return `${hours}:${minutes}`;
};

export const Races: React.FC<RacesProps> = ({ resultId }) => {
  const getRacesDispatch = useAppDispatch();
  useEffect(() => {
    getRacesDispatch(fetchRaces(resultId));
  }, []);

  const { data } = useAppSelector((state) => state.races);
  const { races } = data;

  return (
    <div className={styles["races-holder"]}>
      <div data-testid="races" className={styles.races}>
        {races &&
          races.map((race) => (
            <div key={uuidv4()} className={styles.race}>
              <h4>{`${race["number"]} - "${race["name"]}"...${getStartTime(
                race["startTime"]
              )}`}</h4>
              <Horses starts={race["starts"]} />
            </div>
          ))}
      </div>
    </div>
  );
};
