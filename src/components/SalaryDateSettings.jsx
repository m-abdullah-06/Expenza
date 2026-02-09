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
    <div className="salary-row d-flex justify-content-between align-items-start pt-3 rounded-3 bg-[#0f0f0f] shadow-sm">
      {isEditing ? (
        <div className="d-flex align-items-start gap-2">
          <span className="fw-semibold">Salary Date:</span>

          <input
            type="number"
            className="form-control form-control-sm"
            style={{ width: "90px" }}
            min="1"
            max="31"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />

          <button className="btn btn-primary btn-sm" onClick={handleSave}>
            Save
          </button>

          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <div>
            <div className="text-muted small">Salary Date</div>
            <div className="fw-bold mt-3">
              💰 {salaryDate}
              {getOrdinalSuffix(salaryDate)} of every month
            </div>
          </div>

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
