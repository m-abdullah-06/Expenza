import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

const SavingsGoal = () => {
  const { expenses, budget, dispatch, currency, savingsGoal } =
    useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [tempGoal, setTempGoal] = useState(savingsGoal);

  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  const remaining = budget - totalExpenses;
  const savingsProgress = remaining > 0 ? (remaining / savingsGoal) * 100 : 0;
  const cappedProgress = Math.min(savingsProgress, 100);

  let progressBarColor = "bg-info";
  if (cappedProgress >= 100) {
    progressBarColor = "bg-success";
  } else if (cappedProgress >= 50) {
    progressBarColor = "bg-primary";
  }

  const handleSave = () => {
    dispatch({
      type: "SET_SAVINGS_GOAL",
      payload: parseInt(tempGoal),
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempGoal(savingsGoal); // Reset to current goal
    setIsEditing(false);
  };

  return (
    <div className="card shadow-sm mt-3 border-0">
      <div className="card-body">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h5 className="mb-0 fw-semibold">Savings Goal</h5>
            <small className="text-muted">
              Track how much you can save this month
            </small>
          </div>

          {isEditing ? (
            <div className="d-flex gap-2">
              <input
                type="number"
                className="form-control form-control-sm"
                style={{ width: "130px" }}
                value={tempGoal}
                onChange={(e) => setTempGoal(e.target.value)}
                placeholder="Goal amount"
              />
              <button className="btn btn-primary btn-sm" onClick={handleSave}>
                Save
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => {
                setTempGoal(savingsGoal);
                setIsEditing(true);
              }}
            >
              Edit Goal
            </button>
          )}
        </div>

        {/* Progress Bar */}
        <div className="progress mb-2" style={{ height: "22px" }}>
          <div
            className={`progress-bar ${progressBarColor} fw-semibold`}
            role="progressbar"
            style={{ width: `${cappedProgress}%` }}
          >
            {cappedProgress.toFixed(0)}%
          </div>
        </div>

        {/* Info Text */}
        <div className="d-flex justify-content-between">
          <small className="text-muted">
            Saved:{" "}
            <strong>
              {currency}
              {remaining}
            </strong>
          </small>
          <small className="text-muted">
            Goal:{" "}
            <strong>
              {currency}
              {savingsGoal}
            </strong>
          </small>
        </div>

        <small className="text-muted d-block mt-2">
          {remaining >= savingsGoal
            ? `🎉 Goal reached! You saved ${currency}${remaining}`
            : `Need ${currency}${savingsGoal - remaining} more to reach your goal`}
        </small>
      </div>
    </div>
  );
};

export default SavingsGoal;
