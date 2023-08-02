import React from "react";
import InvestmentList from "./InvestmentList";

const InvestmentTable = ({ results }) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      {results.map((result) => (
        <InvestmentList
          key={result.year}
          year={result.year}
          totalSaving={result.yearlyContribution}
          interest={result.year}
          totalInterest={result.yearlyInterest}
          totalInvestedCapital={result.savingEndOfYear}
        />
      ))}
    </table>
  );
};

export default InvestmentTable;
