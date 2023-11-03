import React, { useState } from "react";
import styles from "./App.module.scss";
import { Select } from "./components/Select/Select";
import { Option } from "./interfaces";

const options: Option[] = [
  {
    label: "V75",
    value: "v75",
  },
  {
    label: "V86",
    value: "v86",
  },
  {
    label: "GS75",
    value: "GS75",
  },
];

const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  return (
    <div className={styles["app"]}>
      <Select
        placeholder="Select a bet type"
        options={options}
        onChange={(selection: Option) => setSelectedOption(selection)}
        selected={selectedOption}
      />
      <p>Hello my selection is {selectedOption?.label}</p>
    </div>
  );
};

export default App;
