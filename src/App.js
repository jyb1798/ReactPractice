import React from "react";
import ExpenseItem from "./components/ExpensesItem/ExpenseItem";

const App = () => {
  const expense = [
    {
      id: "ed1",
      amount: 294.67,
      title: "Car Insurance",
      date: new Date(2022, 2, 1).toISOString(),
    },
    {
      id: "ed2",
      amount: 1000.67,
      title: "House Insurance",
      date: new Date(2022, 1, 31).toISOString(),
    },
    {
      id: "ed3",
      amount: 94.57,
      title: "Toilet Paper",
      date: new Date(2022, 1, 15).toISOString(),
    },
    {
      id: "ed4",
      amount: 11.67,
      title: "New TV",
      date: new Date(2022, 2, 1).toISOString(),
    },
  ];
  return (
    <div>
      <h2>Let's Get Started!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
    </div>
  );
};

export default App;
