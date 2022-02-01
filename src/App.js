import React from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import { expense } from "./components/Expenses/Expense";
import "./components/Expenses/Expense.css";

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
