import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function RoleSwitcher() {
  const { role, setRole, darkMode, setDarkMode } = useContext(AppContext);

  return (
    <div className="flex gap-3">
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-1 bg-black text-white rounded"
      >
        🌙
      </button>
    </div>
  );
}