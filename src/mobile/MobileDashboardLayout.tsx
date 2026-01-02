// src/layouts/MobileDashboardLayout.tsx

import React, { ReactNode } from "react";
import { Home, Activity, TerminalSquare, Settings, Menu } from "lucide-react"; // or your own icon set

type MobileDashboardLayoutProps = {
  /** Main dashboard content (cards, widgets, feeds, etc.) */
  children: ReactNode;
  /** Optional top title, e.g. "MKPTRI Operations" */
  title?: string;
  /** Optional subtitle or status, e.g. "Live Codex" */
  subtitle?: string;
  /** Optional action on top-right menu icon */
  onMenuClick?: () => void;
  /** Current bottom nav key */
  activeTab?: "home" | "activity" | "terminal" | "settings";
  /** Handle bottom nav changes */
  onTabChange?: (tab: MobileDashboardLayoutProps["activeTab"]) => void;
};

export const MobileDashboardLayout: React.FC<MobileDashboardLayoutProps> = ({
  children,
  title = "MKPTRI",
  subtitle = "Living Codex",
  onMenuClick,
  activeTab = "home",
  onTabChange,
}: MobileDashboardLayoutProps) => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Background FX layer (optional, subtle, non-blocking) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Top bar */}
      <header className="flex items-center justify-between px-4 pt-4 pb-3">
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Operations
          </span>
          <h1 className="mt-1 text-lg font-semibold tracking-tight">{title}</h1>
          <p className="text-xs text-slate-400">{subtitle}</p>
        </div>

        <button
          type="button"
          onClick={onMenuClick}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 shadow-sm shadow-black/40 backdrop-blur-md transition-colors active:bg-slate-800"
        >
          <Menu className="h-4 w-4 text-slate-100" />
        </button>
      </header>

      {/* Main scrollable content area */}
      <main className="relative flex-1 overflow-y-auto px-3 pb-20">
        {/* Glass panel wrapper for cards */}
        <div className="space-y-3">{children}</div>
      </main>

      {/* Bottom navigation (mobile primary) */}
      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-800/80 bg-slate-950/80 pb-safe shadow-[0_-8px_30px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-md items-center justify-between px-4 py-2.5">
          <NavItem
            icon={Home}
            label="Home"
            active={activeTab === "home"}
            onClick={() => onTabChange?.("home")}
          />
          <NavItem
            icon={Activity}
            label="Activity"
            active={activeTab === "activity"}
            onClick={() => onTabChange?.("activity")}
          />
          <NavItem
            icon={TerminalSquare}
            label="Terminal"
            active={activeTab === "terminal"}
            onClick={() => onTabChange?.("terminal")}
          />
          <NavItem
            icon={Settings}
            label="Settings"
            active={activeTab === "settings"}
            onClick={() => onTabChange?.("settings")}
          />
        </div>
      </nav>
    </div>
  );
};

type NavItemProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  label,
  active,
  onClick,
}: NavItemProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-1 flex-col items-center gap-0.5"
    >
      <div
        className={[
          "flex h-9 w-9 items-center justify-center rounded-full border text-xs shadow-sm shadow-black/40 transition-all",
          active
            ? "border-purple-400/80 bg-purple-500/20 text-purple-100"
            : "border-slate-700/80 bg-slate-900/70 text-slate-400",
        ].join(" ")}
      >
        <Icon className="h-4 w-4" />
      </div>
      <span
        className={[
          "mt-0.5 text-[10px] uppercase tracking-[0.16em]",
          active ? "text-purple-200" : "text-slate-500",
        ].join(" ")}
      >
        {label}
      </span>
    </button>
  );
};
