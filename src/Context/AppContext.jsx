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
    default:
      return state;
  }
};

// Load initial state from localStorage or use defaults
const getInitialState = () => {
  const savedState = localStorage.getItem("expenzaState");
  if (savedState) {
    return JSON.parse(savedState);
  }
  return {
    budget: 0,
    currency: "$",
    expenses: [],
  };
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, getInitialState());

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("expenzaState", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        currency: state.currency,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
