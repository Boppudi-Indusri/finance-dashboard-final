import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function Charts({ data }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-6">
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amount" />
      </LineChart>
    </div>
  );
}