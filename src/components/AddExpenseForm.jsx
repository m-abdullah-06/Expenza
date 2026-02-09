import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: uuidv4(),
      charge: name,
      amount: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="card border-0 shadow-sm p-3">
        <div className="row g-3 align-items-end">
          <div className="col-md-5">
            <label htmlFor="name" className="form-label fw-semibold text-muted">
              Expense Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="name"
              required="required"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Groceries, Rent, Fuel..."
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="cost" className="form-label fw-semibold text-muted">
              Cost
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="cost"
              required="required"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="500"
            />
          </div>

          <div className="col-md-3 d-grid">
            <button
              type="submit"
              className="btn btn-primary btn-lg fw-semibold"
            >
              + Add Expense
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
