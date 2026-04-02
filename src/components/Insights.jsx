export default function Insights({ transactions }) {
  const categories = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      categories[t.category] = (categories[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.entries(categories).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-6">
      <h2 className="font-bold">Insights</h2>
      {highest ? (
        <p>Highest Spending: {highest[0]} (₹{highest[1]})</p>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}