import { useState } from "react";
import { FiHome, FiBook, FiSettings, FiActivity, FiMenu } from "react-icons/fi";

const navItems = [
  { icon: <FiHome />, label: "Home", href: "/" },
  { icon: <FiBook />, label: "Codex", href: "/codex" },
  { icon: <FiActivity />, label: "Omni", href: "/omni" },
  { icon: <FiSettings />, label: "Settings", href: "/settings" },
];

export function FloatingNavRail() {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-2 transition-all hover:w-48 w-16 group"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {navItems.map((item, i) => (
        <a
          key={item.label}
          href={item.href}
          className="flex items-center gap-3 my-2 px-3 py-2 rounded-xl hover:bg-white/20 transition-colors"
        >
          <span className="text-2xl">{item.icon}</span>
          <span
            className={`text-base font-medium transition-opacity ${expanded ? "opacity-100" : "opacity-0 w-0"}`}
          >
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
}

export function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-white/20 backdrop-blur-lg py-2 px-4 rounded-t-2xl shadow-xl md:hidden">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="flex flex-col items-center text-lg text-gray-800 dark:text-gray-100"
        >
          {item.icon}
          <span className="text-xs mt-1">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
