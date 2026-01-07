import { useEffect, useMemo, useRef } from "react";
import debounce from "lodash/debounce";

export const useDebounce = (callback, delay) => {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = (query) => {
      ref.current?.(query);
    };

    return debounce(func, delay);
  }, [delay]);

  return debouncedCallback;
};
