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
    <div className="card shadow-sm mt-3 border-0">
      <div className="card-body">
        {/* Header */}
        <div className="mb-3">
          <h5 className="mb-0 fw-semibold">Monthly Budget Cycle</h5>
          <small className="text-muted">
            Day {currentDay} of {daysInMonth} • {monthProgress.toFixed(0)}%
            through the month
          </small>
        </div>

        {/* Time Progress */}
        <div className="mb-3">
          <div className="d-flex justify-content-between mb-1">
            <small className="fw-semibold text-muted">Time Progress</small>
            <small className="text-muted">{monthProgress.toFixed(0)}%</small>
          </div>
          <div className="progress" style={{ height: "18px" }}>
            <div
              className="progress-bar bg-secondary"
              role="progressbar"
              style={{ width: `${monthProgress}%` }}
            />
          </div>
        </div>

        {/* Spending Progress */}
        <div className="mb-3">
          <div className="d-flex justify-content-between mb-1">
            <small className="fw-semibold text-muted">Spending Progress</small>
            <small className="text-muted">{spendingProgress.toFixed(0)}%</small>
          </div>
          <div className="progress" style={{ height: "18px" }}>
            <div
              className={`progress-bar ${
                isOnTrack ? "bg-success" : "bg-danger"
              }`}
              role="progressbar"
              style={{ width: `${Math.min(spendingProgress, 100)}%` }}
            />
          </div>
        </div>

        {/* Status Box */}
        <div className={`alert alert-${statusColor} py-2 mb-0`}>
          <div className="fw-semibold">{statusMessage}</div>
          <small>
            {isOnTrack
              ? `You're ${(monthProgress - spendingProgress).toFixed(1)}% under pace.`
              : `You're ${(spendingProgress - monthProgress).toFixed(1)}% over pace.`}
          </small>
        </div>
      </div>
    </div>
  );
};

export default MonthlyBudgetCycle;
