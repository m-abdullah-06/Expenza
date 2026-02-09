import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import SearchBar from "./components/SearchBar";
import BudgetProgress from "./components/BudgetProgress";
import SavingsGoal from "./components/SavingGoal";
import MonthlyBudgetCycle from "./components/MonthlyBudgetCycle";
import MonthDisplay from "./components/MonthDisplay";
import SalaryDateSettings from "./components/SalaryDateSettings";
import MonthlyHistory from "./components/MonthlyHistory";
import "./index.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container">
      <header className="app-header">
        <div className="header-top">
          <h1 className="app-title">Expenza</h1>
          <p className="app-subtitle">Track Smarter. Save better.</p>
        </div>
        <MonthDisplay />
        <SalaryDateSettings />
      </header>

      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4">
          <BudgetProgress />
        </div>
        <div className="col-md-4">
          <SavingsGoal />
        </div>
        <div className="col-md-4">
          <MonthlyBudgetCycle />
        </div>
      </div>

      <h3 className="mt-4 fw-bold">Add Expense</h3>

      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>

      <h3 className="mt-4 fw-bold">Expenses</h3>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="row">
        <div className="col-sm">
          <ExpenseList searchTerm={searchTerm} />
        </div>
      </div>

      <MonthlyHistory />
    </div>
  );
};

export default App;
