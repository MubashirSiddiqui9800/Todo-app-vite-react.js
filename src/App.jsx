import { useState } from "react";
export default function App() {
  const [userinput, setuserInput] = useState("");
  const [todos, setTodos] = useState([]);
  const userInp = (val) => {
    setuserInput(val.target.value);
  };
  const addBtn = () => {
    if (userinput.trim().length > 0) {
      setTodos([...todos, userinput]);
      setuserInput("");
    }
  };
  const deleteBtn = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center text-cyan-400">
          📝 ToDo App
        </h1>
        <p className="text-center text-slate-400 mt-1 mb-6">
          Organize your daily tasks
        </p>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={userinput}
            placeholder="Enter your task..."
            onChange={userInp}
            className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg font-semibold transition"
            onClick={addBtn}
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          <div className="space-y-3">
            {todos.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-slate-800 p-3 rounded-lg border border-slate-700 hover:border-cyan-500 transition"
              >
                <span className="text-white">{item}</span>

                <div className="flex gap-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm">
                    Edit
                  </button>

                  <button
                    onClick={() => deleteBtn(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
