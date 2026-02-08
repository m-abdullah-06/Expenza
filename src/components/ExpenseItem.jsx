"use client";

import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../Context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);
  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge bg-primary rounded-pill">
          {currency}
          {props.cost}
        </span>
        <TiDelete
          size="1.5em"
          onClick={handleDelete}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        />
      </div>
    </li>
  );
};

export default ExpenseItem;
