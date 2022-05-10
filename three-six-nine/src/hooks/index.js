import { useEffect, useRef } from "react";

export function useInterval(delay, callback) {
  const intervalRef = useRef();

  useEffect(() => {
    if (callback && delay) {
      intervalRef.current = setInterval(callback, delay);
      return () => clearInterval(intervalRef.current);
    }
  }, [delay, callback]);
}
