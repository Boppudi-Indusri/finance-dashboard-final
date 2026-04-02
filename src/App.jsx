import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import SummaryCard from "./components/SummaryCard";
import TransactionTable from "./components/TransactionTable";
import RoleSwitcher from "./components/RoleSwitcher";
import Insights from "./components/Insights";
import Charts from "./components/Charts";

function App() {
  const { transactions } = useContext(AppContext);

  const income = transactions.filter(t => t.type === "income").reduce((a, b) => a + b.amount, 0);
  const expense = transactions.filter(t => t.type === "expense").reduce((a, b) => a + b.amount, 0);
  const balance = income - expense;

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Finance Dashboard</h1>
        <RoleSwitcher />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <SummaryCard title="Balance" value={balance} />
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expenses" value={expense} />
      </div>

      <Charts data={transactions} />
      <TransactionTable />
      <Insights transactions={transactions} />
    </div>
  );
}

export default App;