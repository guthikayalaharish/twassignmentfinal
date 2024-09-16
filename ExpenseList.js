import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, editExpense, deleteExpense }) => {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((expense) => (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                editExpense={editExpense}
                deleteExpense={deleteExpense}
              />
            ))}
        </tbody>
      </table>
      <div className="total-amount">
        Total: $
        {expenses
          .reduce((total, expense) => total + expense.amount, 0)
          .toFixed(2)}
      </div>
    </div>
  );
};

export default ExpenseList;
