import { useEffect } from "react";

export default function useWindowEvent(
  eventName: keyof WindowEventMap,
  callback: (e: Event) => void
) {
  useEffect(() => {
    const _fn = (e: Event) => callback(e);
    window.addEventListener(eventName, _fn, { passive: true });
    return () => window.removeEventListener(eventName, _fn);
  }, [eventName, callback]);
}
