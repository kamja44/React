import { useState, useEffect } from "react";
import { useEventListener } from "./useEventListener";

export const useWindowResize = () => {
  const [widthHeight, seTWidthHeight] = useState<number[]>([0, 0]);

  useEffect(() => {
    seTWidthHeight((notUsed) => [window.innerWidth, window.innerHeight]);
  }, []);

  useEventListener(window, "resize", () => {
    seTWidthHeight((notUsed) => [window.innerWidth, window.innerHeight]);
  });
  return widthHeight;
};
