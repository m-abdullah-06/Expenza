import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../Context/AppContext";

const ExpenseItem = ({ id, name, cost, isHistory }) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDelete = () => {
    if (!isHistory) {
      dispatch({
        type: "DELETE_EXPENSE",
        payload: id,
      });
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge bg-primary rounded-pill">
          {currency}
          {cost}
          {!isHistory && (
            <TiDelete
              size="1.5em"
              onClick={handleDelete}
              style={{ cursor: "pointer", marginLeft: "5px" }}
            />
          )}
        </span>
      </div>
    </li>
  );
};

export default ExpenseItem;
