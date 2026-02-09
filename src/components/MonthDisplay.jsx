import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const MonthDisplay = () => {
  const {
    currentMonth,
    currentYear,
    viewingHistory,
    viewingMonth,
    viewingYear,
  } = useContext(AppContext);

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

  const displayMonth = viewingHistory ? viewingMonth : currentMonth;
  const displayYear = viewingHistory ? viewingYear : currentYear;

  return (
    <div className="month-pill">
      <h5 className="mb-0">
        {viewingHistory && (
          <span className="badge bg-warning me-2">History</span>
        )}
        {monthNames[displayMonth]} {displayYear}
      </h5>
    </div>
  );
};

export default MonthDisplay;
