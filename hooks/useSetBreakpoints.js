
import useMediaQuery from "./useMediaQuery";
import { useEffect } from "react";
import { useStore } from "../context/Store";
const useSetBreakpoints = (small2medium, medium2big) => {
  const matchesMedium = useMediaQuery(`(min-width: ${small2medium}px)`);
  const matchesBig = useMediaQuery(`(min-width: ${medium2big || small2medium}px)`);

  const [,dispatch] = useStore();
  useEffect(() => {
    dispatch({isSmall: !matchesMedium, isMedium: matchesMedium && !matchesBig, isBig: matchesBig });
  }, [matchesMedium, matchesBig]);
};


export default useSetBreakpoints;