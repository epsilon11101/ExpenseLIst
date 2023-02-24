import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const filterItems = props.items.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  return filterItems.length === 0 ? (
    <h2 className="expenses-list__fallback">Found no expenses</h2>
  ) : (
    <ul className="expenses-list">{filterItems}</ul>
  );
};

export default ExpensesList;
