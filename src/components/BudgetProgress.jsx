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
    <div className="card stat-card mt-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-semibold">📊 Budget Usage</span>
          <span className="fw-bold">{percentage.toFixed(1)}%</span>
        </div>

        <div className="progress modern-progress">
          <div
            className={`progress-bar ${progressBarColor}`}
            role="progressbar"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="mt-2 text-muted small">
          {percentage >= 100
            ? "⚠️ Budget exceeded!"
            : `${(100 - percentage).toFixed(1)}% remaining`}
        </div>
      </div>
    </div>
  );
};

export default BudgetProgress;
