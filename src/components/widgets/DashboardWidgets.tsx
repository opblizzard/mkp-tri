import { Responsive, WidthProvider } from "react-grid-layout";
// CSS imports moved to parent .astro or layout file

const ResponsiveGridLayout = WidthProvider(Responsive);

/**
 * DashboardWidgets: Drag, resize, modular widgets
 */
export function DashboardWidgets({
  children,
  layouts,
}: {
  children: React.ReactNode[];
  layouts: any;
}) {
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={80}
      isDraggable
      isResizable
      draggableHandle=".widget-drag"
      useCSSTransforms
    >
      {children}
    </ResponsiveGridLayout>
  );
}
