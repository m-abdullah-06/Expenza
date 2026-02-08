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
    <div className="alert alert-secondary d-flex justify-content-between align-items-center">
      {isEditing ? (
        <div className="d-flex align-items-center gap-2 w-100">
          <select
            className="form-select"
            style={{ width: "80px" }}
            value={currency}
            onChange={(e) => handleCurrencyChange(e.target.value)}
          >
            <option value="$">$ (USD)</option>
            <option value="₹">₹ (INR)</option>
            <option value="€">€ (EUR)</option>
            <option value="£">£ (GBP)</option>
            <option value="¥">¥ (JPY)</option>
            <option value="₽">₽ (RUB)</option>
            <option value="PKR">PKR (PKR)</option>
          </select>
          <input
            type="number"
            className="form-control"
            value={newBudget}
            onChange={(e) => setNewBudget(e.target.value)}
          />
          <button className="btn btn-primary btn-sm" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <>
          <span>
            Budget: {currency}
            {budget}
          </span>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default Budget;
