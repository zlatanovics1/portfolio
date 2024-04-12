"use client";

import { useEffect, useState } from "react";

export function useIntervalCount(
  limit: number,
  ms: number,
  inView: boolean,
  delay = 0
) {
  const [count, setCount] = useState(0);
  useEffect(
    function () {
      if (!inView) return;
      let timeout: ReturnType<typeof setInterval>;
      setTimeout(function () {
        timeout = setInterval(function () {
          setCount((count) => {
            if (count === limit) {
              clearInterval(timeout);
              return count;
            }
            return count + 1;
          });
        }, ms);
      }, delay);

      return () => clearInterval(timeout);
    },
    [inView, limit, ms]
  );
  return count;
}
