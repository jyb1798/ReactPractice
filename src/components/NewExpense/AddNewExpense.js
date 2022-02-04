import React from "react";
import "./ExpenseForm.css";

const AddNewExpense = (props) => {
  return (
    <button type="submit" value="Add New Expense" onClick={props.onClickButton}>
      Add New Expense
    </button>
  );
};

export default AddNewExpense;
