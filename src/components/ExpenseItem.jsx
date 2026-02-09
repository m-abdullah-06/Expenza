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
    <li className="list-group-item d-flex justify-content-between align-items-center py-3">
      <div>
        <span className="fw-semibold">{name}</span>
      </div>

      <div className="d-flex align-items-center gap-3">
        <span className="badge bg-[#1e1e1e] text-light fs-6 px-3 py-2">
          {currency}
          {cost}
        </span>

        {!isHistory && (
          <TiDelete
            size="1.4em"
            onClick={handleDelete}
            style={{ cursor: "pointer", opacity: 0.7 }}
            onMouseEnter={(e) => (e.target.style.opacity = 1)}
            onMouseLeave={(e) => (e.target.style.opacity = 0.7)}
          />
        )}
      </div>
    </li>
  );
};

export default ExpenseItem;
