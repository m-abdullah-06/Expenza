import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../Context/AppContext";

const ExpenseList = ({ searchTerm = "" }) => {
  const { expenses } = useContext(AppContext);

  // Filter expenses based on search term
  const filteredExpenses = expenses.filter((expense) =>
    expense.charge.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      {filteredExpenses.length === 0 && searchTerm !== "" ? (
        <div className="alert alert-info">
          No expenses found matching "{searchTerm}"
        </div>
      ) : filteredExpenses.length === 0 ? (
        <div className="alert alert-info">No expenses added yet</div>
      ) : (
        <ul className="list-group">
          {filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              name={expense.charge}
              cost={expense.amount}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ExpenseList;
