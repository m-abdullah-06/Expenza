import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../Context/AppContext";

const ExpenseList = ({ searchTerm = "" }) => {
  const { expenses, viewingHistory, viewingExpenses } = useContext(AppContext);

  // Use viewing expenses if in history mode, otherwise current expenses
  const currentExpenses = viewingHistory ? viewingExpenses : expenses;

  // Filter expenses based on search term
  const filteredExpenses = currentExpenses.filter((expense) =>
    expense.charge.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      {viewingHistory && (
        <div className="alert alert-warning mb-3 shadow-sm mt-4">
          <strong>📖 Viewing History Mode</strong> — You cannot edit expenses
          from previous months.
        </div>
      )}

      {filteredExpenses.length === 0 && searchTerm !== "" ? (
        <div className="alert alert-info shadow-sm">
          No expenses found matching "{searchTerm}"
        </div>
      ) : filteredExpenses.length === 0 ? (
        <div className="alert alert-info shadow-sm">No expenses added yet</div>
      ) : (
        <div className="card border-0 shadow-sm">
          <ul className="list-group list-group-flush">
            {filteredExpenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                id={expense.id}
                name={expense.charge}
                cost={expense.amount}
                isHistory={viewingHistory}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ExpenseList;
