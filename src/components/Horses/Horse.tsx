import React, { useState } from "react";
import styles from "./Horse.module.scss";
import { Details } from "../Details/Details";

interface HorseProps {
  start: {
    number: number;
    horse: {
      name: string;
      trainer: { firstName: string; lastName: string };
      pedigree: { father: { name: string } };
    };
    driver: { firstName: string; lastName: string };
  };
}

export const Horse: React.FC<HorseProps> = ({ start }) => {
  const [showDetails, setShowDetails] = useState(true);
  const handleShowDetails = () => {
    setShowDetails((showDetails) => !showDetails);
  };
  return (
    <div data-testid="horse" className={styles.horse}>
      <div className={styles.horse} onClick={handleShowDetails}>
        <span>{`${start.number} ${start.horse.name} - ${start.driver.firstName} ${start.driver.lastName}`}</span>
        {!showDetails && (
          <Details
            trainer={start.horse.trainer}
            pedigree={start.horse.pedigree}
          />
        )}
      </div>
    </div>
  );
};
