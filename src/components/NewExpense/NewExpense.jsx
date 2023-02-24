import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpeseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const isEditingHandler = () => setIsEditing(true);

  const displayForm = () => {
    return isEditing ? (
      <ExpenseForm
        onSaveExpenseData={saveExpeseDataHandler}
        onCancel={stopEditingHandler}
      />
    ) : (
      <button onClick={isEditingHandler}>Add New Expense</button>
    );
  };

  return <div className="new-expense">{displayForm()}</div>;
};

export default NewExpense;
