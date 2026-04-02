import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function TransactionTable() {
  const { transactions, role, setTransactions } = useContext(AppContext);
  const [search, setSearch] = useState("");

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  const addTransaction = () => {
    const newTx = {
      id: Date.now(),
      date: "2026-04-01",
      amount: 1000,
      category: "New",
      type: "expense"
    };
    setTransactions([...transactions, newTx]);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-6">
      <input
        className="border p-2 mb-3 w-full"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {role === "admin" && (
        <button onClick={addTransaction} className="mb-3 bg-blue-500 text-white px-3 py-1 rounded">
          Add Transaction
        </button>
      )}

      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(t => (
            <tr key={t.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <td>{t.date}</td>
              <td>{t.category}</td>
              <td className={t.type === "income" ? "text-green-500" : "text-red-500"}>
                ₹{t.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}