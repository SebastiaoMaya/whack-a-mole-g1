import { useDispatch } from "react-redux";
import { Board } from "../app/Board";
import { useCallback, useEffect } from "react";
import { initLeaderboard } from "../store/gameSlice";
import { getLeaderboardApi } from "../network/api";

export const Game = () => {
  const dispatch = useDispatch();

  const getLeaderboard = useCallback(async () => {
    try {
      const res = await getLeaderboardApi();
      dispatch(initLeaderboard(res.data));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    getLeaderboard();
  }, [getLeaderboard]);

  return <Board />;
};
