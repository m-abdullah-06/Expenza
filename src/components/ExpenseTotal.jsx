import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const ExpenseTotal = () => {
  const { expenses, currency } = useContext(AppContext);
  const total = expenses.reduce((total, item) => {
    return (total += item.amount);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>
        Spent so far: {currency} {total}
      </span>
    </div>
  );
};

export default ExpenseTotal;
