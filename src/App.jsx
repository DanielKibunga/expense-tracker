import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "", category: "Miscellaneous" });
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.description) return;
    setExpenses([...expenses, formData]);
    setFormData({ name: "", description: "", category: "Miscellaneous" });
  }

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group expenses by category
  const groupedExpenses = filteredExpenses.reduce((acc, expense) => {
    if (!acc[expense.category]) acc[expense.category] = [];
    acc[expense.category].push(expense);
    return acc;
  }, {});

  return (
    <div className="App">
      <h1>💸 Expense Tracker</h1>
      <ExpenseForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <SearchBar searchTerm={searchTerm} onSearch={(e) => setSearchTerm(e.target.value)} />

      {/* Render each category with a separate table */}
      {Object.keys(groupedExpenses).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <ExpenseTable expenses={groupedExpenses[category]} />
        </div>
      ))}
    </div>
  );
}

export default App;

