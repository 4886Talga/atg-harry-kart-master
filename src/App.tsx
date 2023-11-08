import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import { Select } from "./components/Select/Select";
import { Tracks } from "./components/Tracks/Tracks";
import { Option } from "./interfaces";
import { useAppDispatch, useAppSelector } from "./store";
import { fetchData } from "./reducers/betTypeSlice";

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
    value: "gs75",
  },
];

const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option>({
    label: "",
    value: "",
  });

  const betTypeDispatch = useAppDispatch();

  useEffect(() => {
    betTypeDispatch(fetchData(selectedOption));
  }, [selectedOption]);

  const { data, loading } = useAppSelector((state) => state.content);
  const { betType, results } = data;

  return (
    <div className={styles.app}>
      <Select
        placeholder="Select a bet type"
        options={options}
        onChange={(selection: Option) => setSelectedOption(selection)}
        selected={selectedOption}
      />
      <Tracks results={results} betType={betType} />
    </div>
  );
};

export default App;
