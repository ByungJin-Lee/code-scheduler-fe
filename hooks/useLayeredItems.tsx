import { useCallback, useState } from "react";

export default function useLayered<T>(initialValue: T) {
  const [origin, setOrigin] = useState<T>(initialValue);
  const [view, setView] = useState<T>(initialValue);

  const syncWithOrigin = useCallback(() => setView(origin), [setView, origin]);
  const syncWithView = useCallback(() => setOrigin(view), [setOrigin, view]);

  return {
    origin: {
      item: origin,
      set: setOrigin,
    },
    view: {
      item: view,
      set: setView,
    },
    sync: {
      withOrigin: syncWithOrigin,
      withView: syncWithView,
    },
  };
}
