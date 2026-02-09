import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

const Budget = () => {
  const { budget, currency, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newBudget, setNewBudget] = useState(budget);

  const handleSave = () => {
    dispatch({
      type: "SET_BUDGET",
      payload: parseInt(newBudget),
    });
    setIsEditing(false);
  };

  const handleCurrencyChange = (newCurrency) => {
    dispatch({
      type: "SET_CURRENCY",
      payload: newCurrency,
    });
  };

  return (
    <div className="card stat-card h-100">
      <div className="card-body d-flex justify-content-between align-items-center">
        {isEditing ? (
          <div className="d-flex align-items-center gap-2 w-100">
            <select
              className="form-select form-select-sm"
              style={{ width: "90px" }}
              value={currency}
              onChange={(e) => handleCurrencyChange(e.target.value)}
            >
              <option value="$">$</option>
              <option value="₹">₹</option>
              <option value="€">€</option>
              <option value="£">£</option>
              <option value="¥">¥</option>
              <option value="₽">₽</option>
              <option value="PKR">PKR</option>
            </select>

            <input
              type="number"
              className="form-control form-control-sm"
              value={newBudget}
              onChange={(e) => setNewBudget(e.target.value)}
            />

            <button className="btn btn-primary btn-sm" onClick={handleSave}>
              Save
            </button>
          </div>
        ) : (
          <>
            <div>
              <p className="stat-label mb-1">💰 Total Budget</p>
              <h3 className="stat-value text-primary mb-0">
                {currency} {budget}
              </h3>
            </div>

            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Budget;
