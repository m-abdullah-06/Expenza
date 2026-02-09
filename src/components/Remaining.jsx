import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.amount);
  }, 0);
  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";
  return (
    <div className={`alert card stat-card h-100 ${alertType}`}>
      <div className="card-body d-flex flex-column justify-content-center">
        <span className="stat-label mb-1">Remaining:</span>
        <span className="stat-value text-primary mb-0">
          {currency}
          {budget - totalExpenses}
        </span>
      </div>
    </div>
  );
};

export default Remaining;
