import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const MonthlyHistory = () => {
  const { monthlyHistory, dispatch, currency, viewingHistory } =
    useContext(AppContext);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleViewMonth = (monthData) => {
    dispatch({
      type: "LOAD_MONTH",
      payload: {
        month: monthData.month,
        year: monthData.year,
        expenses: monthData.expenses,
        budget: monthData.budget,
      },
    });
  };

  const handleExitHistory = () => {
    dispatch({ type: "EXIT_HISTORY" });
  };

  if (monthlyHistory.length === 0) {
    return (
      <div className="alert alert-info">
        <p className="mb-0">
          📊 No history yet. Your expense history will appear here after the
          first month.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>📜 Monthly History</h4>
        {viewingHistory && (
          <button className="btn btn-primary" onClick={handleExitHistory}>
            ← Back to Current Month
          </button>
        )}
      </div>

      <div className="row">
        {monthlyHistory
          .slice()
          .reverse()
          .map((monthData, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {monthNames[monthData.month]} {monthData.year}
                  </h5>
                  <p className="card-text">
                    <strong>Budget:</strong> {currency}
                    {monthData.budget}
                    <br />
                    <strong>Spent:</strong> {currency}
                    {monthData.totalSpent}
                    <br />
                    <strong>Saved:</strong> {currency}
                    {monthData.budget - monthData.totalSpent}
                    <br />
                    <strong>Expenses:</strong> {monthData.expenses.length}
                  </p>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => handleViewMonth(monthData)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MonthlyHistory;
