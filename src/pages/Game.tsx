import { useDispatch } from "react-redux";
import { Board } from "../app/Board";
import { useCallback, useEffect, useState } from "react";
import { initLeaderboard } from "../store/gameSlice";
import { getLeaderboardApi } from "../network/api";

export const Game = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const getLeaderboard = useCallback(async () => {
    if (isLoading) {
      const res = await getLeaderboardApi();
      dispatch(initLeaderboard(res.data));
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getLeaderboard();
  }, [getLeaderboard]);

  return <Board />;
};
