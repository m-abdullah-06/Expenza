import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

const SavingsGoal = () => {
  const { expenses, budget, dispatch, currency } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [goalAmount, setGoalAmount] = useState(5000);

  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  const remaining = budget - totalExpenses;
  const savingsProgress = remaining > 0 ? (remaining / goalAmount) * 100 : 0;
  const cappedProgress = Math.min(savingsProgress, 100);

  let progressBarColor = "bg-info";
  if (cappedProgress >= 100) {
    progressBarColor = "bg-success";
  } else if (cappedProgress >= 50) {
    progressBarColor = "bg-primary";
  }

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="mb-0">Savings Goal</h5>
        {isEditing ? (
          <div className="d-flex gap-2">
            <input
              type="number"
              className="form-control form-control-sm"
              style={{ width: "120px" }}
              value={goalAmount}
              onChange={(e) => setGoalAmount(parseInt(e.target.value))}
              placeholder="Goal amount"
            />
            <button className="btn btn-primary btn-sm" onClick={handleSave}>
              Save
            </button>
          </div>
        ) : (
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setIsEditing(true)}
          >
            Set Goal
          </button>
        )}
      </div>
      <div className="progress" style={{ height: "30px" }}>
        <div
          className={`progress-bar ${progressBarColor}`}
          role="progressbar"
          style={{ width: `${cappedProgress}%` }}
          aria-valuenow={cappedProgress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {cappedProgress.toFixed(1)}%
        </div>
      </div>
      <small className="text-muted">
        {remaining >= goalAmount
          ? `🎉 Goal reached! Saved ${currency}${remaining} of ${currency}${goalAmount}`
          : `$${remaining} saved of ${currency}${goalAmount} goal (Need ${currency}${goalAmount - remaining} more)`}
      </small>
    </div>
  );
};

export default SavingsGoal;
