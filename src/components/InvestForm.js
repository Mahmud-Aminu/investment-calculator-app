import React, { useState } from "react";

const INITIAL_INPUTS = {
  "current-savings": 1000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const InvestForm = ({ onCalculate }) => {
  const [state, setState] = useState(INITIAL_INPUTS);

  const onChangeHandler = (input, value) => {
    setState((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  const submitInputHandle = (e) => {
    e.preventDefault();
    const userInputs = state;
    onCalculate(userInputs);
    console.log(userInputs);
  };

  const resetHandler = (e) => {
    setState(INITIAL_INPUTS);
  };

  return (
    <form className="form" onSubmit={submitInputHandle}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={state["current-savings"]}
            onChange={(e) => onChangeHandler("current-savings", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={state["yearly-contribution"]}
            onChange={(e) =>
              onChangeHandler("yearly-contribution", e.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={state["expected-return"]}
            onChange={(e) => onChangeHandler("expected-return", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={state["duration"]}
            onChange={(e) => onChangeHandler("duration", e.target.value)}
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestForm;
