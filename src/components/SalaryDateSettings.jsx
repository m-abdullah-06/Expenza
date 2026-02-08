import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

const SalaryDateSettings = () => {
  const { salaryDate, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newDate, setNewDate] = useState(salaryDate);

  const handleSave = () => {
    dispatch({
      type: "SET_SALARY_DATE",
      payload: parseInt(newDate),
    });
    setIsEditing(false);
  };

  return (
    <div className="alert alert-light d-flex justify-content-between align-items-center">
      {isEditing ? (
        <div className="d-flex align-items-center gap-2 w-100">
          <span>Salary Date (Day of Month):</span>
          <input
            type="number"
            className="form-control"
            style={{ width: "100px" }}
            min="1"
            max="31"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <button className="btn btn-primary btn-sm" onClick={handleSave}>
            Save
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span>
            💰 Salary Date: {salaryDate}
            {getOrdinalSuffix(salaryDate)} of every month
          </span>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setIsEditing(true)}
          >
            Change
          </button>
        </>
      )}
    </div>
  );
};

// Helper function for ordinal suffix (1st, 2nd, 3rd, etc.)
const getOrdinalSuffix = (day) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export default SalaryDateSettings;
