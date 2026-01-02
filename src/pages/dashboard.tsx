import { DashboardWidgets } from "../components/widgets/DashboardWidgets";
import {
  LiveCodexFeed,
  OmniEngineLogs,
  RitualTimeline,
} from "../components/widgets/WidgetTemplates";
import {
  FloatingNavRail,
  BottomNavBar,
} from "../components/navigation/Navigation";
import { CommandBar } from "../components/navigation/CommandBar";
// CSS imports moved to parent .astro or layout file

const layouts = {
  lg: [
    { i: "codex", x: 0, y: 0, w: 4, h: 2 },
    { i: "omni", x: 4, y: 0, w: 4, h: 2 },
    { i: "timeline", x: 8, y: 0, w: 4, h: 2 },
  ],
  md: [
    { i: "codex", x: 0, y: 0, w: 5, h: 2 },
    { i: "omni", x: 5, y: 0, w: 5, h: 2 },
    { i: "timeline", x: 0, y: 2, w: 10, h: 2 },
  ],
  sm: [
    { i: "codex", x: 0, y: 0, w: 6, h: 2 },
    { i: "omni", x: 0, y: 2, w: 6, h: 2 },
    { i: "timeline", x: 0, y: 4, w: 6, h: 2 },
  ],
};

export default function DashboardWireframe() {
  return (
    <div className="dashboard-bg min-h-screen w-full">
      <CommandBar />
      <FloatingNavRail />
      <main className="pt-20 pb-20 px-2 md:px-8">
        <DashboardWidgets layouts={layouts}>
          <div key="codex">
            <LiveCodexFeed />
          </div>
          <div key="omni">
            <OmniEngineLogs />
          </div>
          <div key="timeline">
            <RitualTimeline />
          </div>
        </DashboardWidgets>
      </main>
      <BottomNavBar />
    </div>
  );
}
