import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { Select } from "../components/Select/Select";
import { Option } from "../interfaces";
import store from "../store";
import { Provider } from "react-redux";

test("should render our App component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

test("should render our Select component with bet types", async () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onChange = (selection: Option) => {};
  const placeholder = "Select bet type";
  const selected = {
    label: "",
    value: "",
  };
  const options = [
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

  render(
    <Select
      placeholder={placeholder}
      selected={selected}
      options={options}
      onChange={onChange}
    />
  );
  const dropdown = screen.getByTestId("bet-type");
  fireEvent.click(dropdown);

  const dropDownOption = screen.getByText("V75");
  fireEvent.click(dropDownOption);
});
