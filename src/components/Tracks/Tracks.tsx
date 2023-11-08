import React from "react";
import styles from "./Tracks.module.scss";
import { v4 as uuidv4 } from "uuid";
import { Result } from "../../interfaces";
import { Races } from "../Races/Races";

interface TracksProps {
  results: Array<Result>;
  betType: string;
}

const getStartTime = (startDate: string): string => {
  const myDate = new Date(startDate);
  const minutes = myDate.getMinutes();
  const hours = myDate.getHours();
  return `${hours}:${minutes}`;
};

export const Tracks: React.FC<TracksProps> = ({ results, betType }) => {
  return (
    <div className={styles["tracks-holder"]}>
      <h4>{betType}</h4>
      <div id="tracks" data-testid="tracks" className={styles["tracks"]}>
        {results &&
          results.map((event) => (
            <div key={uuidv4()} className={styles["track"]}>
              <h2>{`${event.tracks[0].name} - ${getStartTime(
                event.startTime
              )}`}</h2>
              <Races resultId={event.id} />
            </div>
          ))}
      </div>
    </div>
  );
};
