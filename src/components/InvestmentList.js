import React from "react";

const InvestmentList = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.year}</td>
        <td>{props.totalSaving}</td>
        <td>{props.interest}</td>
        <td>{props.totalInterest}</td>
        <td>{props.totalInvestedCapital}</td>
      </tr>
    </tbody>
  );
};

export default InvestmentList;
