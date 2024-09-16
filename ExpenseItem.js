import React, { useState } from "react";

const ExpenseItem = ({ expense, editExpense, deleteExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);
  const [date, setDate] = useState(expense.date);

  const handleSave = () => {
    editExpense({ ...expense, description, amount, date });
    setIsEditing(false);
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          description
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        ) : (
          `$${amount.toFixed(2)}`
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        ) : (
          new Date(date).toLocaleDateString()
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ExpenseItem;
