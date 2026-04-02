const SummaryCard = ({ title, value }) => {
  return (
    <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800 transform hover:scale-105 transition">
      <h2 className="text-gray-500 dark:text-gray-300">{title}</h2>
      <p className="text-2xl font-bold text-blue-500">₹{value}</p>
    </div>
  );
};

export default SummaryCard;