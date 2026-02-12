import { createContext, useReducer, useEffect } from "react";
import React from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload,
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "SET_CURRENCY":
      return {
        ...state,
        currency: action.payload,
      };
    case "SET_SALARY_DATE":
      return {
        ...state,
        salaryDate: action.payload,
      };
    case "RESET_MONTH": {
      // Save current month to history
      const currentMonthData = {
        month: state.currentMonth,
        year: state.currentYear,
        budget: state.budget,
        expenses: state.expenses,
        totalSpent: state.expenses.reduce(
          (total, item) => total + item.amount,
          0,
        ),
      };

      return {
        ...state,
        monthlyHistory: [...state.monthlyHistory, currentMonthData],
        expenses: [],
        currentMonth: action.payload.month,
        currentYear: action.payload.year,
      };
    }
    case "LOAD_MONTH":
      return {
        ...state,
        viewingHistory: true,
        viewingMonth: action.payload.month,
        viewingYear: action.payload.year,
        viewingExpenses: action.payload.expenses,
        viewingBudget: action.payload.budget,
      };
    case "EXIT_HISTORY":
      return {
        ...state,
        viewingHistory: false,
        viewingMonth: null,
        viewingYear: null,
        viewingExpenses: [],
        viewingBudget: 0,
      };

    case "SET_SAVINGS_GOAL": // ADD THIS CASE
      return {
        ...state,
        savingsGoal: action.payload,
      };
    default:
      return state;
  }
};

// Get current month and year
const getCurrentMonthYear = () => {
  const now = new Date();
  return {
    month: now.getMonth(), // 0-11
    year: now.getFullYear(),
  };
};

// Load initial state from localStorage or use defaults
const getInitialState = () => {
  const savedState = localStorage.getItem("expenzaState");
  const { month, year } = getCurrentMonthYear();

  if (savedState) {
    const parsed = JSON.parse(savedState);

    // Check if month has changed since last visit
    if (parsed.currentMonth !== month || parsed.currentYear !== year) {
      // Auto-save previous month to history and reset
      const previousMonthData = {
        month: parsed.currentMonth,
        year: parsed.currentYear,
        budget: parsed.budget,
        expenses: parsed.expenses,
        totalSpent: parsed.expenses.reduce(
          (total, item) => total + item.amount,
          0,
        ),
      };

      return {
        ...parsed,
        monthlyHistory: [...(parsed.monthlyHistory || []), previousMonthData],
        expenses: [],
        currentMonth: month,
        currentYear: year,
      };
    }

    return parsed;
  }

  return {
    budget: 2000,
    currency: "$",
    salaryDate: 1, // 1st of every month by default
    expenses: [],
    currentMonth: month,
    currentYear: year,
    monthlyHistory: [],
    viewingHistory: false,
    viewingMonth: null,
    viewingYear: null,
    viewingExpenses: [],
    viewingBudget: 0,
    savingsGoal: 5000,
  };
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, getInitialState());

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("expenzaState", JSON.stringify(state));
  }, [state]);

  // Check for salary date and auto-reset month
  useEffect(() => {
    const checkSalaryDate = () => {
      const now = new Date();
      const currentDay = now.getDate();
      const { month, year } = getCurrentMonthYear();

      // If it's the salary date and we haven't reset yet this month
      if (
        currentDay === state.salaryDate &&
        (state.currentMonth !== month || state.currentYear !== year)
      ) {
        dispatch({
          type: "RESET_MONTH",
          payload: { month, year },
        });
      }
    };

    // Check every hour
    const interval = setInterval(checkSalaryDate, 3600000);
    checkSalaryDate(); // Check immediately on mount

    return () => clearInterval(interval);
  }, [state.salaryDate, state.currentMonth, state.currentYear]);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        currency: state.currency,
        salaryDate: state.salaryDate,
        currentMonth: state.currentMonth,
        currentYear: state.currentYear,
        savingsGoal: state.savingsGoal,
        monthlyHistory: state.monthlyHistory,
        viewingHistory: state.viewingHistory,
        viewingMonth: state.viewingMonth,
        viewingYear: state.viewingYear,
        viewingExpenses: state.viewingExpenses,
        viewingBudget: state.viewingBudget,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
