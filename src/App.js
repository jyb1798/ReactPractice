import React from "react";
import ExpenseItem from "./components/ExpensesItem/ExpenseItem";
import { expense } from "./components/ExpensesItem/Expense";

const App = () => {
  return (
    <div>
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
