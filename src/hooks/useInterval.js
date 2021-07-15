import { useEffect, useRef } from "react";

export function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Init interval
  useEffect(() => {
    function interval() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(interval, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
