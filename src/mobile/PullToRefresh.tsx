import { useState } from "react";

/**
 * PullToRefresh: Pull down to refresh dashboard (mobile)
 */
export function PullToRefresh({
  onRefresh,
  children,
}: {
  onRefresh: () => void;
  children: React.ReactNode;
}) {
  // TODO: Implement pull-to-refresh gesture (can use a library or custom logic)
  const [refreshing, setRefreshing] = useState(false);
  // Placeholder UI
  return (
    <div className="relative">
      {refreshing && (
        <div className="absolute top-0 left-0 w-full flex justify-center text-accent-teal animate-fade-in">
          Refreshing...
        </div>
      )}
      {children}
    </div>
  );
}
