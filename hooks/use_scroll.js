import { useEffect } from "react";

const useScroll = (callback, dependencies = []) => {
  useEffect(() => {
    const listener = window.addEventListener("scroll", callback);

    return () => window.removeEventListener("scroll", listener);
  }, dependencies);
};

export default useScroll;
