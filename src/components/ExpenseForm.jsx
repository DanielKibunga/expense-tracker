import React from "react";

function ExpenseForm({ formData, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="name"
        placeholder="Enter expense name"
        value={formData.name}
        onChange={onChange}
      />
      <input
        name="description"
        placeholder="Enter description"
        value={formData.description}
        onChange={onChange}
      />
      <select
        name="category"
        value={formData.category}
        onChange={onChange}
      >
        <option value="Miscellaneous">Miscellaneous</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        {/* Add more categories as needed */}
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
