import React from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import { expense } from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import "./components/Expenses/Expense.css";

const App = () => {
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div className="expenses">
      <NewExpense onaddExpense={addExpenseHandler} />
      <ExpenseFilter />
      {expense.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        />
      ))}
    </div>
  );
};

export default App;
