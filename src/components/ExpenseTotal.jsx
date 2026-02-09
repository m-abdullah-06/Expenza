import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const ExpenseTotal = () => {
  const { expenses, currency } = useContext(AppContext);
  const total = expenses.reduce((total, item) => {
    return (total += item.amount);
  }, 0);

  return (
    <div className="alert alert-primary card stat-card h-100">
      <div className="card-body d-flex flex-column justify-content-center">
        <span className="stat-label mb-1">Spent so far:</span>
        <span className="stat-value text-primary mb-0">
          {currency}
          {total}
        </span>
      </div>
    </div>
  );
};

export default ExpenseTotal;
