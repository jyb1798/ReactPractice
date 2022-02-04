import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  // console.log(props.items);
  if (props.items.length === 0) {
    return (
      <h2
        className="expenses-list__fallback"
        style={{ color: "white", fontWeight: "bold", marginLeft: "15px" }}
      >
        Found no Expenses.
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </ul>
  );
};
export default ExpenseList;
