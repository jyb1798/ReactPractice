import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expensDate = new Date(2022, 2, 1);
  const expenseTitle = "car Insurance";
  const expensAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{expensDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
