import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const MonthlyBudgetCycle = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  // Calculate days into the month
  const now = new Date();
  const currentDay = now.getDate();
  const daysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
  ).getDate();
  const monthProgress = (currentDay / daysInMonth) * 100;

  // Calculate spending progress
  const spendingProgress = budget > 0 ? (totalExpenses / budget) * 100 : 0;

  // Determine if on track
  const isOnTrack = spendingProgress <= monthProgress;

  let statusColor = "success";
  let statusMessage = "On track! 👍";

  if (!isOnTrack) {
    const difference = spendingProgress - monthProgress;
    if (difference > 20) {
      statusColor = "danger";
      statusMessage = "Overspending! 🚨";
    } else if (difference > 10) {
      statusColor = "warning";
      statusMessage = "Spending too fast ⚠️";
    } else {
      statusColor = "info";
      statusMessage = "Slightly ahead of pace";
    }
  }

  return (
    <div className="mt-3">
      <h5>Monthly Budget Cycle</h5>
      <div className="mb-2">
        <small className="text-muted">
          Day {currentDay} of {daysInMonth} ({monthProgress.toFixed(1)}% through
          the month)
        </small>
      </div>

      {/* Month Progress Bar */}
      <div className="mb-2">
        <label className="form-label small">Time Progress</label>
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar bg-secondary"
            role="progressbar"
            style={{ width: `${monthProgress}%` }}
            aria-valuenow={monthProgress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {monthProgress.toFixed(0)}%
          </div>
        </div>
      </div>

      {/* Spending Progress Bar */}
      <div className="mb-2">
        <label className="form-label small">Spending Progress</label>
        <div className="progress" style={{ height: "20px" }}>
          <div
            className={`progress-bar bg-${isOnTrack ? "success" : "danger"}`}
            role="progressbar"
            style={{ width: `${Math.min(spendingProgress, 100)}%` }}
            aria-valuenow={spendingProgress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {spendingProgress.toFixed(0)}%
          </div>
        </div>
      </div>

      <div className={`alert alert-${statusColor} py-2 mb-0`}>
        <strong>{statusMessage}</strong>
        <br />
        <small>
          {isOnTrack
            ? `You're ${(monthProgress - spendingProgress).toFixed(1)}% under pace. Keep it up!`
            : `You're ${(spendingProgress - monthProgress).toFixed(1)}% over pace for this point in the month.`}
        </small>
      </div>
    </div>
  );
};

export default MonthlyBudgetCycle;
