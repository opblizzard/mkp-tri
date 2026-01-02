import { FiSearch, FiZap, FiMenu } from "react-icons/fi";

export function CommandBar() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl flex items-center justify-between bg-white/20 backdrop-blur-lg rounded-b-2xl shadow-xl px-4 py-2 mt-2">
      <button className="text-xl p-2 rounded-lg hover:bg-white/30 transition-colors">
        <FiMenu />
      </button>
      <div className="flex-1 mx-2">
        <input
          className="w-full bg-transparent outline-none px-3 py-1 rounded-lg text-base placeholder-gray-400"
          placeholder="Search, run Omni command..."
        />
      </div>
      <button className="text-xl p-2 rounded-lg hover:bg-white/30 transition-colors">
        <FiZap />
      </button>
    </header>
  );
}
