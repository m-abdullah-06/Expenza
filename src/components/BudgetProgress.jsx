import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const BudgetProgress = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  const percentage =
    budget > 0 ? Math.min((totalExpenses / budget) * 100, 100) : 0;

  // Determine progress bar color based on percentage
  let progressBarColor = "bg-success"; // Green
  if (percentage >= 80) {
    progressBarColor = "bg-danger"; // Red
  } else if (percentage >= 50) {
    progressBarColor = "bg-warning"; // Yellow
  }

  return (
    <div className="mt-3">
      <h5>Budget Usage</h5>
      <div className="progress" style={{ height: "30px" }}>
        <div
          className={`progress-bar ${progressBarColor}`}
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {percentage.toFixed(1)}%
        </div>
      </div>
      <small className="text-muted">
        {percentage >= 100
          ? "Budget exceeded!"
          : `${(100 - percentage).toFixed(1)}% remaining`}
      </small>
    </div>
  );
};

export default BudgetProgress;
