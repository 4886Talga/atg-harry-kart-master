import React from "react";
import styles from "./Details.module.scss";

interface RacesProps {
  trainer: { firstName: string; lastName: string };
  pedigree: { father: { name: string } };
}

export const Details: React.FC<RacesProps> = ({ trainer, pedigree }) => {
  return (
    <div data-testid="details" className={styles.details}>
      <div className={styles.detail}>
        <span>{`Tränare: ${trainer.firstName} ${trainer.lastName}`}</span>
        <span>{`Far: ${pedigree.father.name}`}</span>
      </div>
    </div>
  );
};
