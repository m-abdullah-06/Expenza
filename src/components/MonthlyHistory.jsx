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
      <div className="alert alert-info mt-3">
        <p className="mb-0">
          📊 No history yet. Your expense history will appear here after the
          first month.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3 mt-4">
        <h4 className="fw-bold mb-0">Monthly History</h4>

        {viewingHistory && (
          <button
            className="btn btn-primary shadow-sm"
            onClick={handleExitHistory}
          >
            ← Back to Current Month
          </button>
        )}
      </div>

      <div className="row g-3">
        {monthlyHistory
          .slice()
          .reverse()
          .map((monthData, index) => (
            <div key={index} className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-semibold mb-3">
                    {monthNames[monthData.month]} {monthData.year}
                  </h5>

                  <div className="small text-muted mb-2">Budget</div>
                  <div className="fw-semibold mb-2">
                    {currency}
                    {monthData.budget}
                  </div>

                  <div className="small text-muted mb-2">Spent</div>
                  <div className="fw-semibold mb-2">
                    {currency}
                    {monthData.totalSpent}
                  </div>

                  <div className="small text-muted mb-2">Saved</div>
                  <div className="fw-semibold mb-3">
                    {currency}
                    {monthData.budget - monthData.totalSpent}
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-light text-dark">
                      {monthData.expenses.length} expenses
                    </span>

                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleViewMonth(monthData)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MonthlyHistory;
