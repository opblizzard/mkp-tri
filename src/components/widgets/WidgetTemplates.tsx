import { Card } from "../cards/Card";
import content from "../../data/content.json";
import cycles from "../../../mkp-tri/src/data/cycles.json";
import genesis from "../../../mkp-tri/src/data/genesis.json";

export function LiveCodexFeed() {
  const { featuredArtifacts = [], timeline = [] } = content as any;
  return (
    <Card elevation={2}>
      <div className="widget-drag cursor-move mb-2 text-xs text-gray-400">
        Live Codex Feed
      </div>
      <div className="flex flex-col gap-3">
        {featuredArtifacts.map((a: any, i: number) => (
          <div
            key={i}
            className="flex gap-3 items-center rounded-xl bg-white/5 p-2"
          >
            <img
              src={a.img}
              alt={a.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <div className="font-bold text-accent-purple text-sm">
                {a.title}
              </div>
              <div className="text-xs text-gray-300">{a.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <div className="font-semibold text-xs text-accent-gold mb-1">
          Timeline
        </div>
        <ul className="text-xs text-gray-200 space-y-1">
          {timeline.map((t: any, i: number) => (
            <li key={i}>
              <span className="font-bold text-accent-teal">{t.date}:</span>{" "}
              {t.event}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

import portfolio from "../../../mkp-tri/src/data/portfolio.json";

export function OmniEngineLogs() {
  const modules = (portfolio as any).omniEngineModules || [];
  const states =
    (require("../../../mkp-tri/src/data/genesis.json") as any).modules || [];
  return (
    <Card elevation={2}>
      <div className="widget-drag cursor-move mb-2 text-xs text-gray-400">
        Omni Engine Logs
      </div>
      <div className="flex flex-col gap-2">
        {modules.map((mod: any, i: number) => {
          const state = states.find((m: any) => m.name === mod.name)?.state;
          return (
            <div
              key={i}
              className="flex justify-between items-center bg-white/5 rounded-lg px-3 py-2"
            >
              <div>
                <div className="font-bold text-accent-teal text-sm">
                  {mod.name}
                </div>
                <div className="text-xs text-gray-300">{mod.summary}</div>
              </div>
              {state && (
                <span className="text-xs text-accent-gold font-semibold">
                  {state}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export function RitualTimeline() {
  const current = (genesis as any).currentCycle;
  return (
    <Card elevation={2}>
      <div className="widget-drag cursor-move mb-2 text-xs text-gray-400">
        Ritual Timeline
      </div>
      <div className="flex flex-col gap-2">
        {(cycles as any[]).map((cycle: any) => (
          <div
            key={cycle.id}
            className={`rounded-lg px-3 py-2 ${cycle.id === current ? "bg-accent-purple/30 text-accent-gold font-bold" : "bg-white/5 text-gray-200"}`}
          >
            <div className="text-sm">{cycle.title}</div>
            <div className="text-xs italic">{cycle.mantra}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
