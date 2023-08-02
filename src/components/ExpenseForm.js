import React, { useState } from "react";

const ExpenseForm = ({ onCalculate }) => {
  const [state, setState] = useState({
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: "",
  });

  const handler = {
    currentSaving: (e) =>
      setState({
        ...state,
        "current-savings": e.target.value,
      }),
    yearlySaving: (e) =>
      setState({
        ...state,
        "yearly-contribution": e.target.value,
      }),
    interest: (e) =>
      setState({
        ...state,
        "expected-return": e.target.value,
      }),
    duration: (e) =>
      setState({
        ...state,
        duration: e.target.value,
      }),
  };

  const submitInputHandle = (e) => {
    e.preventDefault();
    const userInputs = state;
    onCalculate(userInputs);
    console.log(userInputs);
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
            onChange={handler.currentSaving}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={state["yearly-contribution"]}
            onChange={handler.yearlySaving}
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
            onChange={handler.interest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={state["duration"]}
            onChange={handler.duration}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default ExpenseForm;
