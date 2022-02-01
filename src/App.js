import React from "react";
import ExpenseItem from "./components/ExpensesItem/ExpenseItem";
import { expense } from "./components/ExpensesItem/Expense";
import "./components/ExpensesItem/Expense.css";

const App = () => {
  return (
    <div className="expenses">
      <h2>Let's Get Started!</h2>
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
