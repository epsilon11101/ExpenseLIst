import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div>
      <ExpensesFilter />
      <Card className="expenses">
        {props.items.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
