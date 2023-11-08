import React, { useState } from "react";
import styles from "./Select.module.scss";
import { Option } from "../../interfaces";

interface SelectProps {
  placeholder: string;
  options: Option[];
  selected: Option;
  onChange: (selection: Option) => void;
}

export const Select: React.FC<SelectProps> = ({
  placeholder,
  options,
  selected,
  onChange,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className={styles["select-component"]}>
      <div
        data-testid="bet-type"
        aria-label="Select bet type"
        onClick={() => setShowOptions(!showOptions)}
        className={styles.select}
      >
        <span>{selected.label !== "" ? selected.label : placeholder}</span>
        <span>V</span>
      </div>
      {showOptions && (
        <div data-testid="options" className={styles.options}>
          {options.map((option) => (
            <div
              onClick={() => {
                onChange(option);
                setShowOptions(false);
              }}
              key={option.value}
              className={styles.option}
            >
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
